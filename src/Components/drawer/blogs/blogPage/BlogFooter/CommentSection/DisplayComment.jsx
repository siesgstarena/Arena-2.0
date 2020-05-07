import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
import Comment from './Comment';
import MessageCard from '../../../../../common/MessageCard';

import '../BlogFooter.css';


const DisplayComment = ({ comments }) => {
  const [commentList, setCommentList] = useState(comments);
  // const [isUpdate, setUpdate] = useState(false);

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // comment functions
  const deleteComment = (newComment) => {
    const newCommentList = commentList.filter(j => newComment !== j);
    setCommentList(newCommentList);
    setMessage('Comment Deleted Successfully!');
    setMessageType('success');
  };

  const updateAndReset = (updatedComment) => {
    if (updatedComment.length >= 4) {
      const temporaryArray = [...commentList];
      // temporaryArray[index].commentValue = updatedComment;
      setCommentList(temporaryArray);
      // setComment('');

      setMessage('Comment Updated Successfully');
      setMessageType('success');
    } else {
      setMessage('Updated Comment cannot be less than 4 characters');
      setMessageType('error');
    }
  };

  const onCancelUpdate = () => {
    setMessage('Comment Retained Successfully');
    setMessageType('info');
  };
  // const pushAndReset = (newComment, setValue) => {
  //   if (newComment.length >= 4) {
  //     const commentObject = {
  //       userId: '5b5ca6857cf0b100209fe499',
  //       user: 'Rahul Sawantdesai',
  //       userRatings: 0,
  //       commentValue: newComment,
  //       time: 'May 1, 2020 11:21 PM',
  //       likes: 0,
  //       dislikes: 0,
  //     };
  //     setCommentList([...commentList, commentObject]);
  //     setValue('');
  //     setMessage('Comment Posted Successfully');
  //     setMessageType('success');
  //   } else {
  //     setMessage('Comment cannot be less than 4 characters');
  //     setMessageType('error');
  //   }
  // };


  return (
    <div>
      <div style={{ marginTop: '4em' }} className="center">
        {
        (comments.length === 0) ? (
          <div style={{ textAlign: 'center' }}>
            <img alt="nocomments" className="" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/arena_assets_comment_actions.webp" width="200px" />
            <Headline6 className="" style={{ margin: '2px 0px' }}>No Comments</Headline6>
          </div>
        ) : (
          comments.map(newComment => (
            <Comment
              key={newComment._id}
              newComment={newComment}
              updateAndReset={updateAndReset}
              onCancelUpdate={onCancelUpdate}
              deleteComment={deleteComment}
            />

          ))
        )}
        {/* message card */}
        <MessageCard
          message={message}
          messageType={messageType}
          setMessageType={setMessageType}
        />
      </div>
    </div>
  );
};

DisplayComment.propTypes = {
  comments: PropTypes.array.isRequired,
};

export default DisplayComment;
