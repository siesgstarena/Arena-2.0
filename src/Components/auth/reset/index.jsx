import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import { Headline4, Body1 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';
import MessageCard from '../../common/MessageCard/index';
import UserContext from '../../../Contexts/UserContext';
import PasswordField from '../../common/PasswordField/index';

const Reset = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    // Not allowing the user to visit login page when the user is logged in
    if (user) {
      history.push(`/profile/${user.userId}`);
    }
  }, []);

  const errorDetector = () => {
    if (password.length < 8 || confirmPassword.length < 8) {
      // If password length is less than 8
      setMessageType('error');
      setMessage('Password length should be of 8 characters');
    } else if (password !== confirmPassword) {
      // If passwords don't match
      setMessageType('error');
      setMessage('Passwords don\'t match');
    }
  };

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
              <MessageCard messageType={messageType} message={message} />
              <PasswordField
                id="1"
                password={password}
                label="New Password"
                setPassword={setPassword}
              />
              <div className="ma3" />
              <PasswordField
                id="2"
                password={confirmPassword}
                label="Re-enter New Password"
                setPassword={setConfirmPassword}
              />
              <div className="ma3" />
              <Button raised onClick={errorDetector}>
                Submit
              </Button>
            </div>
          </Cell>
        </Row>
      </Grid>
    </div>
  );
};

export default Reset;
