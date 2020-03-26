import React, { useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Headline4, Body1 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/react-hooks';
import MessageCard from '../../common/MessageCard/index';
import { UPDATE_ANNOUNCEMENT } from '../../../graphql/mutations';
import SnackbarContext from '../../../Contexts/SnackbarContext';

const AnnouncementEditor = ({ announcement: currentAnnouncement }) => {
  const { contestId } = useParams();
  const [announcement, setAnnouncement] = useState(currentAnnouncement);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const history = useHistory();
  const { setSnackbarMessage } = useContext(SnackbarContext);

  const handleAnnoucementSubmit = async () => {
    setMessageType('loading');
    setMessage('Updating Annoucement, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_ANNOUNCEMENT,
      variables: {
        code: contestId, announcement,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.updateAnnouncement.success) {
      setSnackbarMessage('Annoucement Updated Successfully');
      history.push(`/admin/${contestId}`);
    } else {
      setMessageType('error');
      setMessage(data.updateAnnouncement.message);
    }
  };

  return (
    <div className="mw7 center pa3">
      <Headline4 className="purple mb0 mt2">Announcements</Headline4>
      <Body1 className="mid-gray">Edit announcements for Single Round Match #1</Body1>
      <Body1>Type your message in the box below</Body1>
      <TextField
        label="Announcement"
        className="mb2 text-area-border"
        style={{ height: '300px' }}
        textarea
      >
        <Input
          value={announcement}
          onChange={e => setAnnouncement(e.currentTarget.value)}
        />
      </TextField>
      <MessageCard messageType={messageType} message={message} />
      <Button outlined className="" onClick={handleAnnoucementSubmit}>
          Submit
      </Button>
    </div>
  );
};


AnnouncementEditor.propTypes = {
  announcement: PropTypes.string.isRequired,
};


export default AnnouncementEditor;
