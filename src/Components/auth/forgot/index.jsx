import React, { useState, useContext, useEffect } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    // Not allowing the user to visit login page when the user is logged in
    if (user) {
      history.push(`/profile/${user.userId}`);
    }
  }, []);

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
                onChange={e => setEmail(e.currentTarget.value)}
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
};

export default Forgot;
