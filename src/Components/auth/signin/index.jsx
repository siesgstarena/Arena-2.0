/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { useHistory, useLocation } from 'react-router-dom';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import { GET_USER_ID } from '../../../graphql/queries';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';
import PasswordField from '../../common/PasswordField/index';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;

  useEffect(() => {
  // Here set the messageType and message of the message component on mount
  // We set these variables using the state which is passed using history.push of react router
  // This is done because when the user logouts we need to display successfully logged out message
    if (state) {
      if (state.message && state.messageType) {
        setMessageType(state.messageType);
        setMessage(state.message);
      }
    }
    // Not allowing the user to visit login page when the user is logged in
    if (user) {
      history.push(`/profile/${user.userId}`);
    }
  }, []);


  const client = useApolloClient();

  const handleSignIn = async () => {
    setMessageType('loading');
    setMessage('Logging In, Please Wait');
    const { data, error } = await client.query({
      query: GET_USER_ID,
      variables: { email, password },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.login.userId) {
      setUser({ userId: data.login.userId });
      history.push(`/profile/${data.login.userId}`);
    } else {
      setMessageType('error');
      setMessage('Invalid Credentials');
    }
  };

  const onInputChange = (setFunction, value) => {
    setFunction(value);
    setMessage('');
    setMessageType('');
  };

  return (
    <Grid className="mw8 center">
      <Row className="">
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <Headline4 className="purple">
            Sign In
          </Headline4>
          <Body1 className="mid-gray">
            Sign in to your account to enter into the awesome world of coding.
          </Body1>
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <div className="pa3">
            <TextField
              label="Email address"
              className="pa2 mb4 w-100"
              outlined
            >
              <Input
                id="1"
                value={email}
                onChange={e => onInputChange(setEmail, e.target.value)}
              />
            </TextField>
            <PasswordField
              id="2"
              password={password}
              label="Password"
              setPassword={setPassword}
            />
            <MessageCard messageType={messageType} message={message} />
            {/* When Forgot Password is clicked, we are redirected to forgot route */}
            <Body2 className="mid-gray dim pointer" onClick={() => history.push('/auth/forgot')}>
              Forgot Password?
            </Body2>
            <Body1 className="mid-gray">
              Don&apos;t have an account?
              <span className="dim pointer" onClick={() => history.push('/auth/signup')}>
              &nbsp;Let&apos;s create one
              </span>
            </Body1>
            <Button raised onClick={handleSignIn}>
              Sign in
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

export default SignIn;
