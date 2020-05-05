import React from 'react';
import '@material/react-material-icon/dist/material-icon.css';
import CommentSection from './CommentSection/DisplayComment';
import './BlogFooter.css';
import LikeDislike from './LikeDislike';
import ShareIcon from './ShareIcon';


const BlogFooter = () => (
  <div className="center ">
    {/* like dislike and share section  */}
    <div className="flex justify-between">
      <LikeDislike />
      <ShareIcon />
    </div>
    {/* comment section  */}
    <CommentSection />

  </div>
);

export default BlogFooter;
