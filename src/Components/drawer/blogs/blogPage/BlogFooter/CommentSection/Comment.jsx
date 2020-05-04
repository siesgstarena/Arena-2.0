import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import { userColor } from '../../../../../../commonFunctions';

const Comment = ({ newComment }) => {
  const {
    userId, userRatings, user, commentValue, time,
  } = newComment;

  return (
    <div className="flex flex-column pa1 mb2 mt2">
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
      <Headline6 style={{ margin: '2px 60px', fontSize: '18px' }}>{commentValue}</Headline6>
    </div>

  );
};


Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
};

export default Comment;
