import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/react-hooks';
import { UPDATE_ABOUT } from '../../../graphql/mutations';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const EditAbout = ({ about, setMessage, setMessageType }) => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [editedAbout, setEditedAbout] = useState(about);
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const client = useApolloClient();
  const handleAboutSubmit = async () => {
    setMessageType('loading');
    setMessage('Updating about, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_ABOUT,
      variables: {
        about: editedAbout,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.updateBio)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.updateBio.success) {
      setShowTextBox(false);
      setMessageType('success');
      setMessage('About updated successfully');
    } else {
      setMessageType('error');
      setMessage(data.updateBio.message);
    }
  };
  return (
    <div>
      {showTextBox ? (
        <div>
          <TextField label="About" className="mb2 text-area-width-100" textarea rows="20">
            <Input value={editedAbout} onChange={(e) => setEditedAbout(e.currentTarget.value)} />
          </TextField>
          <Button raised className="mr2" onClick={() => handleAboutSubmit()}>
            Submit
          </Button>
          <Button outlined onClick={() => setShowTextBox(false)}>
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <Button raised onClick={() => setShowTextBox(true)}>
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

EditAbout.propTypes = {
  about: PropTypes.string.isRequired,
  setMessage: PropTypes.func.isRequired,
  setMessageType: PropTypes.func.isRequired,
};

export default EditAbout;
