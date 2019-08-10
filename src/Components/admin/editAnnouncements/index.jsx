import React, { useState } from 'react';
import { Headline4, Body1 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';

const EditAnnouncements = () => {
  const [message, setMessage] = useState('');
  return (
    <div className="mw7 center pa3">
      <Headline4 className="purple mb0 mt2">Announcements</Headline4>
      <Body1 className="mid-gray">Edit announcements for Single Round Match #1</Body1>
      <Body1>Type your message in the box below</Body1>
      <TextField
        label="Message"
        className="mb2 text-area-border"
        style={{ height: '300px' }}
        textarea
      >
        <Input
          value={message}
          onChange={e => setMessage(e.currentTarget.value)}
        />
      </TextField>
      <Button outlined className="">
        Submit
      </Button>
    </div>
  );
};

export default EditAnnouncements;
