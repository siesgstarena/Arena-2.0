/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import 'tachyons';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { history } = props;

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
            {/* When Forgot Password is clicked, we are redirected to forgot route */}
            <Body2 className="mid-gray dim pointer" onClick={() => history.push('/auth/forgot')}>
              Forgot Password?
            </Body2>
            <Body1 className="mid-gray">
              Don&apos;t have an account?
              <span className="dim pointer" onClick={() => history.push('/auth/signup')}>
              &nbsp;
              Let&apos;s create one
              </span>
            </Body1>
            <Button raised>
              Sign in
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

SignIn.propTypes = {
  history: PropTypes.object.isRequired,
};

export default SignIn;
