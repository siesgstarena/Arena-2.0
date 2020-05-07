import React, { useState } from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';

const UpdateComment = ({
  initialComment, onUpdateFunction, onCancel, setUpdate,
}) => {
  const {
    commentValue,
  } = initialComment;
  const [endComment, setEndComment] = useState(commentValue);
  return (

    <div className="flex flex-column pa1 mt2 mb2">
      <div className="mb2" style={{ paddingLeft: '3.1em' }}>
        <TextField
          label="Update Comment"
          notchedOutlineClassName=""
          className=""
          style={{ width: '100%' }}
          textarea
          outlined
          helperText={(
            <HelperText>
              Stay relevant, friendly and within 2^11 characters
            </HelperText>
    )}
        >
          <Input
            className="w-100"
            value={endComment}
            onChange={(e) => { setEndComment(e.target.value); }}
          />
        </TextField>
      </div>
      <div className="pl4 flex justify-between">
        <Button
          className=""
          onClick={() => {
            setUpdate(false);
            onCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          className=""
          raised
          onClick={() => {
            setUpdate(false);
            onUpdateFunction(endComment);
          }}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

UpdateComment.propTypes = {
  initialComment: PropTypes.object.isRequired,
  onUpdateFunction: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default UpdateComment;
