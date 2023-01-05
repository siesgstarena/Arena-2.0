import React, { useState, useEffect, useCallback } from 'react';
import { useApolloClient } from '@apollo/client';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { useHistory, useLocation } from 'react-router-dom';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import { GET_USER_DETAILS_ON_LOGIN } from '../../../graphql/queries';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import PasswordField from '../../common/PasswordField/index';
import useRedirectLoggedInUser from '../../../customHooks/useRedirectLoggedInUser';
import useLoggedInUser from '../../../customHooks/useLoggedInUser';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { addUserToCache } = useLoggedInUser();
  const history = useHistory();
  const location = useLocation();
  // const isMountedRef = useRef(true);
  const { state } = location;
  const client = useApolloClient();
  // useRedirectLoggenInUser is used to redirect the user to
  // profile page if they are already signed in.
  useRedirectLoggedInUser();
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
    // if (state && state.isSessionExpired) {
    //   // resetting the cache since user session has expired
    //   client.cache.reset();
    //   delete state.isSessionExpired;
    //   history.replace({ location, state });
    // }
  }, [state, history, location]);

  const handleSignIn = useCallback(async () => {
    setMessageType('loading');
    setMessage('Logging In, Please Wait');
    const { data, error } = await client.query({
      query: GET_USER_DETAILS_ON_LOGIN,
      variables: { email, password },
      // fetch policy is set to network only so that everytime it hits the server
      fetchPolicy: 'network-only',
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.login.userId) {
      // Resetting the cache so that now user gets updated data
      client.cache.reset();
      // Adding this user to the cache and thereby updating other component which
      // depend on it
      addUserToCache({
        userId: data.login.userId,
        name: data.login.name,
        email: data.login.email,
      });
      // state.from exists then redirecting the user to that location
      if (state && state.from) {
        const previousPathname = state.from.pathname;
        history.push({
          pathname: previousPathname,
        });
        delete state.from;
        history.replace({ location, state });
        return;
      }
      // else redirect the user to the profile page
      history.push(`/profile/${data.login.userId}`);
    } else {
      setMessageType('error');
      setMessage('Invalid Credentials');
    }
  }, [email, password, addUserToCache, client, history, location, state]);

  const handleKeyDown = useCallback(
    (e) => {
      // checking for enter key
      if (e.keyCode === 13) {
        handleSignIn();
      }
    },
    [handleSignIn]
  );
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
          <Headline4 className="purple">Sign In</Headline4>
          <Body1 className="mid-gray">
            Sign in to your account to enter into the awesome world of coding.
          </Body1>
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <div className="pa3">
            <TextField label="Email address" className="mb4 w-100" outlined>
              <Input
                id="1"
                value={email}
                onChange={(e) => onInputChange(setEmail, e.target.value)}
              />
            </TextField>
            <PasswordField id="2" password={password} label="Password" setPassword={setPassword} />
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
              <span
                className="dim pointer"
                role="presentation"
                onClick={() => history.push('/auth/signup')}
              >
                &nbsp;Let&apos;s create one!
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
