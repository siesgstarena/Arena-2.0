import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import { useApolloClient } from '@apollo/react-hooks';
import { UPDATE_ABOUT } from '../../../graphql/mutations';
import { GET_PROFILE_DETAILS } from '../../../graphql/queries';
import MessageCard from '../../common/MessageCard/index';

const EditAbout = ({ about }) => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [editedAbout, setEditedAbout] = useState(about);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { userId } = useParams();
  const client = useApolloClient();
  const handleAboutSubmit = async () => {
    setMessageType('loading');
    setMessage('Updating about, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_ABOUT,
      variables: {
        about: editedAbout,
      },
      update: (cache) => {
        try {
          const { profilePage } = cache.readQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: userId },
          });
          cache.writeQuery({
            query: GET_PROFILE_DETAILS,
            variables: { id: userId },
            data: {
              profilePage: {
                ...profilePage,
                user: {
                  ...profilePage.user,
                  about: editedAbout,
                },
              },
            },
          });
        } catch (e) {
          console.log(e);
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
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
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      {
        showTextBox
          ? (
            <div>
              <TextField
                label="About"
                className="mb2 text-area-width-100"
                textarea
                rows="20"
              >
                <Input
                  value={editedAbout}
                  onChange={e => setEditedAbout(e.currentTarget.value)}
                />
              </TextField>
              <Button
                raised
                className="mr2"
                onClick={() => handleAboutSubmit()}
              >
                Submit
              </Button>
              <Button
                outlined
                onClick={() => setShowTextBox(false)}
              >
                Cancel
              </Button>
            </div>
          ) : (
            <div>
              <Button
                raised
                onClick={() => setShowTextBox(true)}
              >
                Edit
              </Button>
            </div>
          )
      }
    </div>
  );
};

EditAbout.propTypes = {
  about: PropTypes.string.isRequired,
};

export default EditAbout;
