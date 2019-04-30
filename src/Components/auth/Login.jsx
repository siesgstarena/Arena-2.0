import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  render() {
    const { email, password } = this.state;
    return (
      <Grid className="mw8 center">
        <Row className="">
          <Cell desktopColumns={5}>
            <Headline4 className="purple">
              Login
            </Headline4>
            <Body1 className="mid-gray">
              Login to your account to enter into the awesome world of coding.
            </Body1>
          </Cell>
          <Cell desktopColumns={5}>
            <div className="pa3">
              <TextField
                label="Email address"
                className="pa2 mb4 w-100"
                outlined
              >
                <Input
                  value={email}
                  onChange={e => this.setState({ email: e.currentTarget.value })}
                />
              </TextField>
              <TextField
                label="Password"
                className="pa2 mb4 w-100"
                outlined
              >
                <Input
                  type="password"
                  value={password}
                  onChange={e => this.setState({ password: e.currentTarget.value })}
                />
              </TextField>
              <Button raised>
                Login
              </Button>
            </div>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default Login;
