import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/react-hooks';
import 'tachyons';
import MessageCard from '../../common/MessageCard/index';
import { VERIFY_USER } from '../../../graphql/mutations';
import { RESEND_OTP } from '../../../graphql/queries';
import useRedirectLoggedInUser from '../../../customHooks/useRedirectLoggedInUser';

const ConfirmEmail = () => {
  const [otp, setOtp] = useState('');
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const history = useHistory();
  const { userId } = useParams();
  useRedirectLoggedInUser();

  const client = useApolloClient();

  const verifyOtp = async () => {
    setMessageType('loading');
    setMessage('Verifying OTP, Please Wait');
    const { data, error } = await client.mutate({
      mutation: VERIFY_USER,
      variables: { userId, otp },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.verifyUser.success) {
      history.push({
        pathname: '/auth/signin',
        state: {
          messageType: 'success',
          message: 'Successfully Registered. You can now login with your registered email address.',
        },
      });
    } else {
      setMessageType('error');
      setMessage(data.verifyUser.message);
    }
  };

  const resendOtp = async () => {
    setMessageType('loading');
    setMessage('Sending OTP, Please Wait');
    const { data, error } = await client.query({
      query: RESEND_OTP,
      variables: { userId },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.resendOtp.success) {
      setMessage('OTP sent successfully');
      setMessage('success');
    } else {
      setMessageType('error');
      setMessage(data.resendOtp.message);
    }
  };

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
                className="mb3 w-100"
                outlined
              >
                <Input
                  id="1"
                  type="otp"
                  value={otp}
                  onChange={e => setOtp(e.currentTarget.value)}
                />
              </TextField>
              <MessageCard
                messageType={messageType}
                message={message}
                setMessageType={setMessageType}
              />
              <Body2 className="mid-gray ma0 mb3 pa0">
               Haven&apos;t Recieved OTP yet?
               &nbsp;
                <span role="presentation" onClick={resendOtp} className="i pointer">
                 Click to resend OTP
                </span>
              </Body2>
              <Button onClick={verifyOtp} raised>
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
