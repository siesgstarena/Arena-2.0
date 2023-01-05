import React, { useState, useContext } from 'react';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/client';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body1 } from '@material/react-typography';
import MessageCard from '../../common/MessageCard/index';
import { SUBMIT_FEEDBACK } from '../../../graphql/mutations';
import 'tachyons';
import AuthContext from '../../../Contexts/AuthContext';

const Feedback = () => {
  const { authState } = useContext(AuthContext);
  const [name, setName] = useState(
    authState.user && authState.user.name ? authState.user.name : ''
  );
  const [email, setEmail] = useState(
    authState.user && authState.user.email ? authState.user.email : ''
  );
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();

  const handleFeedback = async () => {
    setMessageType('loading');
    setMessage('Submitting feedback, Please Wait');
    const { data, error } = await client.mutate({
      mutation: SUBMIT_FEEDBACK,
      variables: {
        name,
        email,
        message: feedback,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.submitFeedback.success) {
      setFeedback('');
      setMessageType('success');
      setMessage('Feedback submitted successfully');
    } else {
      setMessageType('error');
      setMessage(data.submitFeedback.message);
    }
  };

  return (
    <Grid className="mw8 center">
      <Row className="">
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <Headline4 className="purple">Feedback time</Headline4>
          <Body1 className="mid-gray">
            Your valuable feedback matters us a lot. It helps us to constantly improve our platform
            to make it a better place for the community.
          </Body1>
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
          <div className="pa3">
            <TextField label="Full Name" className="mb4 w-100" outlined>
              <Input value={name} id="name" onChange={(e) => setName(e.currentTarget.value)} />
            </TextField>
            <TextField label="Email address" className="mb4 w-100" outlined>
              <Input value={email} id="email" onChange={(e) => setEmail(e.currentTarget.value)} />
            </TextField>
            <TextField label="Message" className="mb4 text-area-width-100" textarea>
              <Input value={feedback} onChange={(e) => setFeedback(e.currentTarget.value)} />
            </TextField>
            <br />
            <MessageCard
              messageType={messageType}
              message={message}
              setMessageType={setMessageType}
            />
            <Button raised onClick={handleFeedback}>
              Submit
            </Button>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

export default Feedback;
