import React, { useState } from 'react';
import { Button } from '@material/react-button';
import IconToggle from './IconToggle';

const LikeDislike = () => {
  const [like, setLike] = useState(0);
  const [isUpvote, setUpvote] = useState(false);
  const [dislike, setDislike] = useState(0);
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
    <div style={{ width: '200px' }} className="flex">
      <Button
        disabled={isDownvote}
        className="mt2 btn"
        style={{ color: '#28a745' }}
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
        className="mt2 ml2 btn"
        style={{ color: '#dc3545', minWidth: '32px' }}
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

export default LikeDislike;
