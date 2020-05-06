import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import { Headline5 } from '@material/react-typography';
import '@material/react-material-icon/dist/material-icon.css';
import CommentSectionContainer from './CommentSection/CommentSectionContainer';
import './BlogFooter.css';
import LikeDislike from './LikeDislike';
import ShareIcon from './ShareIcon';
import CommentBox from './CommentSection/CommentBox';


const BlogFooter = ({ upvotes, downvotes }) => {
  const [comment, setComment] = useState('');
  return (
    <div className="center ">
      {/* like dislike and share section  */}
      <div className="flex justify-between">
        <LikeDislike upvotes={upvotes} downvotes={downvotes} />
        <ShareIcon />
      </div>
      {/* comment section  */}
      <Headline5 style={{ margin: '15px 0px 10px 0px' }}>
        Comments
      </Headline5>
      <hr className="ba" style={{ borderColor: '#6200ee' }} />
      <div className="">
        <CommentBox endComment={comment} setEndComment={setComment} />
        <Button
          className=""
          style={{ float: 'right' }}
          onClick={() => { console.log('clicked'); }}
          raised
        >
          Submit
        </Button>
      </div>
      <CommentSectionContainer />
    </div>
  );
};

BlogFooter.propTypes = {
  upvotes: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
};

export default BlogFooter;
