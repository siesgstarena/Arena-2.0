import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';

class Forgot extends React.Component {
  state = {
    email: '',
  };

  render() {
    const { email } = this.state;
    return (
      <Grid className="mw8 center">
        <Row className="">
          <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
            <Headline4 className="purple">
              Reset Password
            </Headline4>
            <Body1 className="mid-gray">
            To reset your password, you need to provide us your email address.
            We will send you an email with a link for resetting your password.
            You may need to check your spam folder or unblock codechef@siesgst.ac.in
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
                  onChange={e => this.setState({ email: e.currentTarget.value })}
                />
              </TextField>
              <Button raised>
                Submit
              </Button>
            </div>
          </Cell>
        </Row>
      </Grid>
    );
  }
}

export default Forgot;
