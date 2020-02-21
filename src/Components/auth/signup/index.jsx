/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useContext } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input, HelperText } from '@material/react-text-field';
import {
  Headline3, Headline4, Body1, Body2,
} from '@material/react-typography';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLoggedIn } = useContext(UserContext);
  const history = useHistory();

  const handleSignUp = () => {
    setIsLoggedIn(true);
  };

  return (
    <Grid className="mw8 center">
      <Row className="">
        <Cell columns={12}>
          <Headline3 className="purple">
            Create your profile
          </Headline3>
          <Body1 className="mid-gray">
            To participate in our coding competitions, you must
            create your profile to help us identify you.
          </Body1>
        </Cell>
      </Row>
      <hr className="ba" style={{ borderColor: '#5E2CA5' }} />
      <Row className="">
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <Headline4 className="purple">
            Your details
          </Headline4>
          <Body1 className="mid-gray">
            Your name and username will be made available publicly so that
              other users can communicate with you.
          </Body1>
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <div className="pa3">
            <TextField
              label="Full Name"
              className="pa2 mb4 w-100"
              outlined
            >
              <Input
                id="1"
                value={name}
                onChange={e => setName(e.currentTarget.value)}
              />
            </TextField>
            <TextField
              label="Username"
              className="pa2 mb4 w-100"
              outlined
            >
              <Input
                id="2"
                value={username}
                onChange={e => setUsername(e.currentTarget.value)}
              />
            </TextField>
            <TextField
              label="Email address"
              helperText={<HelperText>Use your SIESGST student email account</HelperText>}
              className="pa2 w-100"
              outlined
            >
              <Input
                id="3"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
            </TextField>
            <TextField
              label="Password"
              className="pa2 mt3 mb3 w-100"
              outlined
            >
              <Input
                id="4"
                type="password"
                value={password}
                onChange={e => setPassword(e.currentTarget.value)}
              />
            </TextField>
            <Body2 className="mid-gray ma3 ml0">
              By Signing up, you agree with our&nbsp;
              <span className="dim pointer" onClick={() => history.push('/privacy')}>
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
