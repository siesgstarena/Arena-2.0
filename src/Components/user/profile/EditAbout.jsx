import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';

const EditAbout = ({ about }) => {
  const [showTextBox, setShowTextBox] = useState(false);
  const [editedAbout, setEditedAbout] = useState(about);
  return (
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
            onClick={() => setShowTextBox(true)}
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
  );
};

EditAbout.propTypes = {
  about: PropTypes.string.isRequired,
};

export default EditAbout;
