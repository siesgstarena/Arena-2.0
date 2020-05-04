import React, {useState, useEffect} from 'react';
import '@material/react-material-icon/dist/material-icon.css';
import CommentSection from './CommentSection/DisplayComment';
import './BlogFooter.css';
import LikeDislike from './LikeDislike';
import ShareIcon from './ShareIcon';


const BlogFooter = () => {
  const [url, setURL] = useState('');
  useEffect(() => {
    setURL(window.location.href);
  }, []);

  return (
    <div className="center ">
      {/* like dislike and share section  */}
      <div className="flex justify-between">
        <LikeDislike />
        <ShareIcon url={url} />
      </div>
      {/* comment section  */}
      <CommentSection />

    </div>
  );
};

export default BlogFooter;
