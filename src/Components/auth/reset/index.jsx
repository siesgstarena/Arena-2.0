import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';
import ErrorCard from '../../common/ErrorCard/index';

class Reset extends React.Component {
  state = {
    password: '',
    confirmPassword: '',
    isError: false,
    errorMessage: '',
  };
  // isError is used to check whether error has encountered or not
  // If an error is encountered then we generate the errorMessage

  errorDetector = () => {
    const { password, confirmPassword } = this.state;
    if (password.length < 8 || confirmPassword.length < 8) {
      // If password length is less than 8
      this.setState({
        isError: true,
        errorMessage: 'Password length should be of 8 characters',
      });
    } else if (password !== confirmPassword) {
      // If passwords don't match
      this.setState({
        isError: true,
        errorMessage: 'Passwords don\'t match',
      });
    } else {
      // If no error is encountered
      this.setState({
        isError: false,
      });
    }
  };

  render() {
    const {
      password, confirmPassword, isError, errorMessage,
    } = this.state;

    return (
      <div>
        <Grid className="mw8 center">
          <Row className="">
            <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
              <Headline4 className="purple">
                Create a new password
              </Headline4>
              <Body1 className="mid-gray">
                While creating a new password, make sure that
                you dont use any previously used passwords.
              </Body1>
            </Cell>
            <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
              <div className="pa3">
                { isError ? (
                  <ErrorCard errorMessage={errorMessage} />
                )
                  : <div />
                }
                <TextField
                  label="New Password"
                  className="pa2 mb4 w-100"
                  outlined
                >
                  <Input
                    id="1"
                    type="password"
                    value={password}
                    onChange={e => this.setState({ password: e.currentTarget.value })}
                  />
                </TextField>
                <TextField
                  label="Re-enter New Password"
                  className="pa2 mb4 w-100"
                  outlined
                >
                  <Input
                    id="2"
                    type="password"
                    value={confirmPassword}
                    onChange={e => this.setState({ confirmPassword: e.currentTarget.value })}
                  />
                </TextField>
                <Button raised onClick={this.errorDetector}>
                  Submit
                </Button>
              </div>
            </Cell>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Reset;
