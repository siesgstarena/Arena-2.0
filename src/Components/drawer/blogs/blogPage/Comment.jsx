import React, { useState } from 'react';
import { Button } from '@material/react-button';
import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { userColor } from '../../../../commonFunctions';
import './BlogFooter/BlogFooter.css';

const IconToggle = ({ isIconClicked, alt, iconLinks }) => (
  isIconClicked ? (
    <img alt={alt} src={iconLinks[0]} />
  )
    : (
      <img alt={alt} src={iconLinks[1]} />
    )
);

IconToggle.propTypes = {
  isIconClicked: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string),
};

const Comment = ({ newComment }) => {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [isUpvote, setUpvote] = useState(false);
  const [isDownvote, setDownvote] = useState(false);
  const [isDeleted, setDelete] = useState(false);
  const UpvoteOptions = ['https://img.icons8.com/material/24/28a745/facebook-like--v1.png', 'https://img.icons8.com/material-outlined/24/28a745/facebook-like.png'];
  const DownvoteOptions = ['https://img.icons8.com/material-rounded/24/dc3545/thumbs-down.png', 'https://img.icons8.com/material-outlined/24/dc3545/thumbs-down.png'];

  const addValue = (value, setValue, setVote) => {
    const newValue = value + 1;
    setValue(newValue);
    setVote(true);
  };

  const {
    userId, userRatings, user, commentValue, time,
  } = newComment;
  return (
    isDeleted ? ('')
      : (
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
          <Headline6 style={{ margin: '2px 60px', fontSize: '18px' }}>{commentValue}</Headline6>
          <div className="tl">
            <Button
              className="mr1 btn"
              style={{ color: '#28a745' }}
              onClick={() => { addValue(like, setLike, setUpvote); }}
              icon={<IconToggle isIconClicked={isUpvote} alt="like" color="#28a745" iconLinks={UpvoteOptions} />}
            >
              <span style={{ fontSize: '20px', marginLeft: '5px' }}>
                {
                like > 0 ? (like) : ''
            }
              </span>
            </Button>
            <Button
              className="btn"
              style={{ color: '#dc3545' }}
              onClick={() => addValue(dislike, setDislike, setDownvote)}
              icon={<IconToggle isIconClicked={isDownvote} alt="dislike" iconLinks={DownvoteOptions} />}
            >
              <span style={{ fontSize: '20px', marginLeft: '5px' }}>
                {
                dislike > 0 ? (dislike) : ''
                }
              </span>
            </Button>
            <Button
              className="center-ns"
              onClick={() => {
                setDelete(true);
              }}
              style={{ float: 'right' }}
            >
              Delete
            </Button>
            <Button
              className="center-ns"
              style={{ float: 'right' }}
            >
              Update
            </Button>
          </div>
        </div>
      )
  );
};

Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
};
export default Comment;
