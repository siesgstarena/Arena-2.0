import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import IconToggle from './IconToggle';

const LikeDislike = ({
  upvotes,
  downvotes,
  isUpvote,
  isDownvote,
  onUpvote,
  onDownvote,
  disableDownvote,
  disableUpvote,
}) => {
  const UpvoteOptions = [
    'https://img.icons8.com/material/24/28a745/facebook-like--v1.png',
    'https://img.icons8.com/material-outlined/24/28a745/facebook-like.png',
  ];
  const DownvoteOptions = [
    'https://img.icons8.com/material-rounded/24/dc3545/thumbs-down.png',
    'https://img.icons8.com/material-outlined/24/dc3545/thumbs-down.png',
  ];

  return (
    <div className="flex mt2">
      <Button
        className="btn"
        style={{ color: '#28a745', padding: '0px', minWidth: '40px' }}
        icon={
          <IconToggle
            isIconClicked={isUpvote}
            alt="like"
            color="#28a745"
            iconLinks={UpvoteOptions}
          />
        }
        onClick={onUpvote}
        disabled={disableUpvote}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {upvotes.length > 0 ? upvotes.length : ''}
        </span>
      </Button>
      <Button
        className="btn"
        style={{ color: '#dc3545', padding: '0px', minWidth: '40px' }}
        onClick={onDownvote}
        disabled={disableDownvote}
        icon={<IconToggle isIconClicked={isDownvote} alt="dislike" iconLinks={DownvoteOptions} />}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {downvotes.length > 0 ? downvotes.length : ''}
        </span>
      </Button>
    </div>
  );
};

LikeDislike.propTypes = {
  upvotes: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
  isUpvote: PropTypes.bool.isRequired,
  isDownvote: PropTypes.bool.isRequired,
  onUpvote: PropTypes.func.isRequired,
  onDownvote: PropTypes.func.isRequired,
  disableDownvote: PropTypes.bool.isRequired,
  disableUpvote: PropTypes.bool.isRequired,
};

export default LikeDislike;
