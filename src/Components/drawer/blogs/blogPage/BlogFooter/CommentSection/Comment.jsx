import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import { userColor } from '../../../../../../commonFunctions';

const Comment = ({ newComment }) => {
  const { userId, userRatings, user } = newComment;

  return (
    <div className="flex mt2">
      <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="20px" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
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
      </div>
    </div>

  );
};


Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
};

export default Comment;
