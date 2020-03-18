import React, { useState, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { useHistory, useLocation } from 'react-router-dom';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import { GET_USER_DETAILS_ON_LOGIN } from '../../../graphql/queries';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';
import PasswordField from '../../common/PasswordField/index';
import useRedirectLoggedInUser from '../../../customHooks/useRedirectLoggedInUser';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { setUser } = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { state } = location;
  const redirectLoggedInUser = useRedirectLoggedInUser();
  redirectLoggedInUser();

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
  }, []);

  const [loadUserData, { called, data, error }] = useLazyQuery(
    GET_USER_DETAILS_ON_LOGIN,
    { variables: { email, password } },
  );


  // const client = useApolloClient();

  const handleSignIn = async () => {
    setMessageType('loading');
    setMessage('Logging In, Please Wait');
    loadUserData();
    // const { data, error } = await client.query({
    //   query: GET_USER_DETAILS_ON_LOGIN,
    //   variables: { email, password },
    // errorPolicy: "all",
    // onError: ({ networkError, graphqlError }) => {
    //   console.log(networkError, graphqlError);
    //   setMessageType('error');
    //   setMessage('Database error encountered');
    // },
    // });
    if (error && called) {
      // console.log(error.graphQLErrors);
      setMessageType('error');
      setMessage('Database error encountered.');
      return;
    }
    if (called) {
      if (data.login.userId) {
        setUser({
          userId: data.login.userId,
          email: data.login.email,
          name: data.login.name,
        });
        if (state && state.from) {
          history.push(state.from.pathname);
          return;
        }
        history.push(`/profile/${data.login.userId}`);
      } else {
        setMessageType('error');
        setMessage('Invalid Credentials');
      }
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
              <span className="dim pointer" role="presentation" onClick={() => history.push('/auth/signup')}>
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
