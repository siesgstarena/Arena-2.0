import React from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';

const UpdateComment = ({ editedComment, setEditedComment, onCancel, onUpdateFunction }) => (
  <div className="flex flex-column pa1 mt2 mb2">
    <div className="mb2" style={{ paddingLeft: '3.1em' }}>
      <TextField
        label="Update Comment"
        notchedOutlineClassName=""
        className=""
        style={{ width: '100%' }}
        textarea
        outlined
        helperText={<HelperText>Stay relevant, friendly and within 2^11 characters</HelperText>}
      >
        <Input
          className="w-100"
          value={editedComment}
          onChange={(e) => {
            setEditedComment(e.target.value);
          }}
        />
      </TextField>
    </div>
    <div className="flex justify-end">
      <Button className="" outlined onClick={onCancel}>
        Cancel
      </Button>
      <Button className="ml2" raised onClick={onUpdateFunction}>
        Update
      </Button>
    </div>
  </div>
);

UpdateComment.propTypes = {
  onUpdateFunction: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  editedComment: PropTypes.string.isRequired,
  setEditedComment: PropTypes.func.isRequired,
};

export default UpdateComment;
