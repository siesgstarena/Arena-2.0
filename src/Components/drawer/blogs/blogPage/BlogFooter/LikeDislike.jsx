import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import IconToggle from './IconToggle';

const LikeDislike = ({ upvotes, downvotes }) => {
  const [like, setLike] = useState(upvotes.length);
  const [isUpvote, setUpvote] = useState(false);
  const [dislike, setDislike] = useState(downvotes.length);
  const [isDownvote, setDownvote] = useState(false);


  const toggleValue = (value, setValue, setVote) => {
    const newValue = value + 1;
    const tempValue = value - 1;
    if (newValue % 2 === 0) {
      setVote(false);
      setValue(tempValue);
    } else {
      setVote(true);
      setValue(newValue);
    }
  };
  const UpvoteOptions = ['https://img.icons8.com/material/24/28a745/facebook-like--v1.png', 'https://img.icons8.com/material-outlined/24/28a745/facebook-like.png'];
  const DownvoteOptions = ['https://img.icons8.com/material-rounded/24/dc3545/thumbs-down.png', 'https://img.icons8.com/material-outlined/24/dc3545/thumbs-down.png'];

  return (
    <div className="flex mt2">
      <Button
        disabled={isDownvote}
        className="btn"
        style={{ color: '#28a745', padding: '0px', minWidth: '40px' }}
        icon={<IconToggle isIconClicked={isUpvote} alt="like" color="#28a745" iconLinks={UpvoteOptions} />}
        onClick={() => { toggleValue(like, setLike, setUpvote); }}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {
            like > 0 ? (like) : ''
          }
        </span>
      </Button>
      <Button
        disabled={isUpvote}
        className="btn"
        style={{ color: '#dc3545', padding: '0px', minWidth: '40px' }}
        onClick={() => toggleValue(dislike, setDislike, setDownvote)}
        icon={<IconToggle isIconClicked={isDownvote} alt="dislike" iconLinks={DownvoteOptions} />}
      >
        <span style={{ fontSize: '20px', marginLeft: '5px' }}>
          {
          dislike > 0 ? (dislike) : ''
          }
        </span>
      </Button>
    </div>
  );
};

LikeDislike.propTypes = {
  upvotes: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
};

export default LikeDislike;
