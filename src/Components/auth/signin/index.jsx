import React, { useState, useContext, useEffect } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { useHistory, useLocation } from 'react-router-dom';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import { GET_USER_DETAILS_ON_LOGIN } from '../../../graphql/queries';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import AuthContext from '../../../Contexts/AuthContext';
import PasswordField from '../../common/PasswordField/index';
import useRedirectLoggedInUser from '../../../customHooks/useRedirectLoggedInUser';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { authDispatch } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  // const isMountedRef = useRef(true);
  const { state } = location;
  // useRedirectLoggenInUser is used to redirect the user to
  // profile page if they are already signed in.
  useRedirectLoggedInUser();

  useEffect(() => {
    // This effect is used to LOGOUT the user if the session of the user is expired
    if (state && state.isSessionExpired) {
      authDispatch({
        type: 'LOGOUT',
      });
      delete state.isSessionExpired;
      history.replace({ location, state });
    }
  }, [state, history, authDispatch, location]);

  useEffect(() => {
  // Here set the messageType and message of the message component on mount
  // We set these variables using the state which is passed using history.push of react router
  // This is done because when the user logouts we need to display successfully logged out message
    if (state && state.message && state.messageType) {
      setMessageType(state.messageType);
      setMessage(state.message);
      delete state.message;
      delete state.messageType;
      history.replace({ location, state });
    }
  }, [state, history, location]);


  const client = useApolloClient();

  const handleSignIn = async () => {
    // getDog();
    setMessageType('loading');
    setMessage('Logging In, Please Wait');
    const { data, error } = await client.query({
      query: GET_USER_DETAILS_ON_LOGIN,
      variables: { email, password },
      // errorPolicy: 'none',
      // onError: ({ networkError, graphqlError }) => {
      //   console.log(networkError, graphqlError);
      //   setMessageType('error');
      //   setMessage('Database error encountered');
      // },
    });
    if (error) {
      // console.log(error.graphQLErrors);
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.login.userId) {
      // console.log(data);
      // console.log(data.error);
      authDispatch({
        type: 'LOGIN',
        payload: {
          user: data.login,
        },
      });
      if (state && state.from) {
        const previousPathname = state.from.pathname;
        delete state.from;
        history.replace({ location, state });
        history.push(previousPathname);
        return;
      }
      history.push(`/profile/${data.login.userId}`);
    } else {
      setMessageType('error');
      setMessage('Invalid Credentials');
    }
  };

  const handleKeyDown = (e) => {
    // checking for enter key
    if (e.keyCode === 13) {
      handleSignIn();
    }
  };
  // Adding event listener for keydown
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

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
              className="mb4 w-100"
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
            <MessageCard
              messageType={messageType}
              message={message}
              setMessageType={setMessageType}
            />
            {/* When Forgot Password is clicked, we are redirected to forgot route */}
            <Body2 className="mid-gray dim pointer" onClick={() => history.push('/auth/forgot')}>
              Forgot Password?
            </Body2>
            <Body1 className="mid-gray">
              Don&apos;t have an account?
              <span className="dim pointer" role="presentation" onClick={() => history.push('/auth/signup')}>
              &nbsp;Let&apos;s create one!
              </span>
            </Body1>
            <Button
              raised
              onClick={handleSignIn}
            >
              Sign in
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

export default SignIn;
