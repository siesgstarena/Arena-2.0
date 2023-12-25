import React, { useState } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input, HelperText } from '@material/react-text-field';
import { Headline3, Headline4, Body1, Body2 } from '@material/react-typography';
import { useApolloClient } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import { SIGN_UP } from '../../../graphql/mutations';
import PasswordField from '../../common/PasswordField/index';
import useRedirectLoggedInUser from '../../../customHooks/useRedirectLoggedInUser';

const SignUp = () => {
  document.title = 'SIESGSTarena | Sign Up';
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  useRedirectLoggedInUser();

  const client = useApolloClient();

  const onInputChange = (setFunction, value) => {
    setFunction(value);
    setMessage('');
    setMessageType('');
  };

  const handleSignUp = async () => {
    setMessageType('loading');
    setMessage('Registering user, Please Wait');
    const { data, error } = await client.mutate({
      mutation: SIGN_UP,
      variables: {
        email,
        username,
        password,
        name,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.signup.success) {
      history.push(`/auth/confirm/${data.signup.userId}`);
    } else {
      setMessageType('error');
      setMessage(data.signup.message);
    }
    // console.log(data);
    // setUser(true);
  };

  return (
    <Grid className="mw8 center">
      <Row className="">
        <Cell columns={12}>
          <Headline3 className="purple">Create your profile</Headline3>
          <Body1 className="mid-gray">
            To participate in our coding competitions, you must create your profile to help us
            identify you.
          </Body1>
        </Cell>
      </Row>
      <hr className="ba" style={{ borderColor: '#5E2CA5' }} />
      <Row className="">
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <Headline4 className="purple">Your details</Headline4>
          <Body1 className="mid-gray">
            Your name and username will be made available publicly so that other users can
            communicate with you.
          </Body1>
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <div className="pa3">
            <TextField label="Full Name" className="mb4 w-100" outlined>
              <Input id="1" value={name} onChange={(e) => onInputChange(setName, e.target.value)} />
            </TextField>
            <TextField label="Username" className="mb4 w-100" outlined>
              <Input
                id="2"
                value={username}
                onChange={(e) => onInputChange(setUsername, e.target.value)}
              />
            </TextField>
            <TextField
              label="Email address"
              helperText={<HelperText>Use your SIESGST student email account</HelperText>}
              className="w-100"
              outlined
            >
              <Input
                id="3"
                value={email}
                onChange={(e) => onInputChange(setEmail, e.target.value)}
              />
            </TextField>
            <div className="ma2" />
            <PasswordField id="4" password={password} label="Password" setPassword={setPassword} />
            <MessageCard
              messageType={messageType}
              message={message}
              setMessageType={setMessageType}
            />
            <Body2 className="mid-gray ma3 ml0">
              By Signing up, you agree with our&nbsp;
              <span
                className="dim pointer"
                role="presentation"
                onClick={() => history.push('/privacy')}
              >
                privacy policy
              </span>
            </Body2>
            <Button raised onClick={handleSignUp}>
              Sign up
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

export default SignUp;
