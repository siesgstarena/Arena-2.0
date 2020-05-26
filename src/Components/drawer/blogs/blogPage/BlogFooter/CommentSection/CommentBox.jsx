import React from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';

const CommentBox = ({ endComment, setEndComment }) => (
  <div className="pt2">
    <TextField
      label="Comment"
      notchedOutlineClassName=""
      className=""
      style={{ width: '100%' }}
      textarea
      outlined
      helperText={<HelperText>Stay relevant, friendly and within 2^11 characters</HelperText>}
    >
      <Input
        className="w-100"
        value={endComment}
        onChange={(e) => {
          setEndComment(e.target.value);
        }}
      />
    </TextField>
  </div>
);

CommentBox.propTypes = {
  endComment: PropTypes.string.isRequired,
  setEndComment: PropTypes.func.isRequired,
};

export default CommentBox;
