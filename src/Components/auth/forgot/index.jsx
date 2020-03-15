/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useContext, useEffect } from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import 'tachyons';
import UserContext from '../../../Contexts/UserContext';
import { FORGOT_PASSWORD_MAIL } from '../../../graphql/queries';

const Forgot = () => {
  const [email, setEmail] = useState('');
  const { user } = useContext(UserContext);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();

  const client = useApolloClient();

  useEffect(() => {
    // Not allowing the user to visit login page when the user is logged in
    if (user) {
      history.push(`/profile/${user.userId}`);
    }
  }, []);

  const sendResetLink = async () => {
    setMessageType('loading');
    setMessage('Sending Email, Please Wait');
    const { data, error } = await client.query({
      query: FORGOT_PASSWORD_MAIL,
      variables: { email },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.forgotPasswordMail.success) {
      setMessage('Email sent successfully');
      setMessageType('success');
    } else {
      setMessageType('error');
      setMessage(data.forgotPasswordMail.message);
    }
  };

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
              className="pa2 mb2 w-100"
              outlined
            >
              <Input
                id="1"
                value={email}
                onChange={e => setEmail(e.currentTarget.value)}
              />
            </TextField>
            <MessageCard messageType={messageType} message={message} />
            <Button className="mt4" onClick={sendResetLink} raised>
              Send Reset link
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Forgot;
