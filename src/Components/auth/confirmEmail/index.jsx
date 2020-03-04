import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import 'tachyons';
// import MessageCard from '../../common/MessageCard/index';
import UserContext from '../../../Contexts/UserContext';

const ConfirmEmail = () => {
  const [otp, setOtp] = useState('');
  // const [messageType, setMessageType] = useState('');
  // const [message, setMessage] = useState('');
  const { user } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    // Not allowing the user to visit login page when the user is logged in
    if (user) {
      history.push(`/profile/${user.userId}`);
    }
  }, []);

  return (
    <div>
      <Grid className="mw8 center">
        <Row className="">
          <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
            <Headline4 className="purple">
              Confirm your account
            </Headline4>
            <Body1 className="mid-gray">
            We have sent a 6 digit OTP to your entered email address.
            </Body1>
          </Cell>
          <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
            <div className="pa3">
              {/* <MessageCard messageType={messageType} message={message} /> */}
              <TextField
                label="Enter OTP"
                className="pa2 mb3 w-100"
                outlined
              >
                <Input
                  id="1"
                  type="otp"
                  value={otp}
                  onChange={e => setOtp(e.currentTarget.value)}
                />
              </TextField>
              {/* <MessageCard messageType={messageType} message={message} /> */}
              <Body2 className="mid-gray ma0 mb3 pa0">
               Haven&apos;t Recieved OTP yet?
               &nbsp;
                <span className="i pointer">
                 Click to resend OTP
                </span>
              </Body2>
              <Button raised>
                Verify OTP
              </Button>
              <Body2 className="mid-gray mt4 ma0 mb4 pa0">
              In case, when OTP sent to your email address is not received, check your spam folder.
              If the issue persists, contact&nbsp;
                <a href="mailto:codechef@siesgst.ac.in" className="i mid-gray no-underline">codechef@siesgst.ac.in</a>
              </Body2>
            </div>
          </Cell>
        </Row>
      </Grid>
    </div>
  );
};

export default ConfirmEmail;
