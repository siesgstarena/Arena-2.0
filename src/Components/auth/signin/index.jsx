/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext, useEffect } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { useHistory, useLocation } from 'react-router-dom';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;

  // Here set the messageType and message of the message component on mount
  // We set these variables using the state which is passed using history.push of react router
  useEffect(() => {
    if (state) {
      if (state.message && state.messageType) {
        setMessageType(state.messageType);
        setMessage(state.message);
      }
    }
  }, []);

  const handleSignIn = () => {
    setIsLoggedIn(true);
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
                onChange={e => setEmail(e.currentTarget.value)}
              />
            </TextField>
            <TextField
              label="Password"
              className="pa2 w-100"
              outlined
            >
              <Input
                id="2"
                type="password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
              />
            </TextField>
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
