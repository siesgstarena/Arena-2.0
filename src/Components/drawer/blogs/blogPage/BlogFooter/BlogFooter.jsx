import React from 'react';
import PropTypes from 'prop-types';
import '@material/react-material-icon/dist/material-icon.css';
import CommentSection from './CommentSection/DisplayComment';
import './BlogFooter.css';
import LikeDislike from './LikeDislike';
import ShareIcon from './ShareIcon';


const BlogFooter = ({ upvotes, downvotes }) => (
  <div className="center ">
    {/* like dislike and share section  */}
    <div className="flex justify-between">
      <LikeDislike upvotes={upvotes} downvotes={downvotes} />
      <ShareIcon />
    </div>
    {/* comment section  */}
    <CommentSection />
  </div>
);

BlogFooter.propTypes = {
  upvotes: PropTypes.array.isRequired,
  downvotes: PropTypes.array.isRequired,
};

export default BlogFooter;
