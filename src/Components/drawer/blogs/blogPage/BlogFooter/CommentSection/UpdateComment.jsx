import React, { useState } from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import { Button } from '@material/react-button';
import { userColor } from '../../../../../../commonFunctions';

const UpdateComment = ({
  initialComment, onUpdateFunction, index, onCancel,
}) => {
  const {
    commentValue, userId, userRatings, time, user,
  } = initialComment;
  const [endComment, setEndComment] = useState(commentValue);
  return (

    <div className="flex flex-column pa1 mb2">
      <div className="flex">
        <img className="fr ba pa1 bw1" alt="user-icon" style={{ borderRadius: '50%', borderColor: userColor(userId, userRatings) }} height="30px" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
        <div className="ml3">
          <Link
            className="no-underline dim"
            to={`/profile/${userId}`}
          >
            <Headline6 style={{
              color: userColor(userId, userRatings), margin: '2px 2px 0px 2px', lineHeight: '1rem', fontSize: '17px',
            }}
            >
              {user}
            </Headline6>
          </Link>
          <span className="ml1" style={{ fontSize: '13px' }}>{time}</span>
        </div>
      </div>
      <div className="pl5 mt2 mb2">
        <TextField
          label="Comment"
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
          enhanced
          className=""
          onClick={() => {
            onCancel();
          }}
        >
          Cancel
        </Button>
        <Button
          className=""
          raised
          onClick={() => {
            onUpdateFunction(index, endComment);
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
  index: PropTypes.number.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default UpdateComment;
