import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Headline4, Body1 } from '@material/react-typography';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/client';
import Editor from '../../common/MarkdownEditor/Editor';
import EditorContainer from '../../common/MarkdownEditor/EditorContainer';
import MessageCard from '../../common/MessageCard/index';
import { UPDATE_ANNOUNCEMENT } from '../../../graphql/mutations';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import useSentry from '../../../customHooks/useSentry';

const AnnouncementEditor = ({ announcement: currentAnnouncement }) => {
  const { contestId } = useParams();
  const [announcement, setAnnouncement] = useState(currentAnnouncement);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const history = useHistory();
  const { logError } = useSentry();
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();

  const handleAnnoucementSubmit = async () => {
    setMessageType('loading');
    setMessage('Updating Annoucement, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_ANNOUNCEMENT,
      variables: {
        code: contestId,
        announcement,
      },
    });
    if (error) {
      logError('updateAnnoucement query', { ...data, ...error });
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.updateAnnouncement)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.updateAnnouncement.success) {
      history.push({
        pathname: `/admin/${contestId}`,
        state: {
          snackbarMessage: 'Annoucement updated successfully',
        },
      });
    } else {
      logError('updateAnnoucement query', { ...data, ...error });
      setMessageType('error');
      setMessage(data.updateAnnouncement.message);
    }
  };

  return (
    <div className="mw7 center pa3">
      <Headline4 className="purple mb0 mt2">Announcements</Headline4>
      <Body1 className="mid-gray">Edit announcements for Single Round Match #1</Body1>
      <Body1>Type your message in the box below</Body1>
      <EditorContainer title="Announcement">
        <Editor value={announcement} setValue={setAnnouncement} />
      </EditorContainer>
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
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
