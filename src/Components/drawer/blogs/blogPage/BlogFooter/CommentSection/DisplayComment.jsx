import React, { useState } from 'react';
import { Button } from '@material/react-button';
import { Headline6, Headline5 } from '@material/react-typography';
import Comment from './Comment';
import MessageCard from '../../../../../common/MessageCard';
import LikeDislike from '../LikeDislike';
import CommentBox from './CommentBox';
import UpdateComment from './UpdateComment';
import '../BlogFooter.css';


const DisplayComment = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const [isUpdate, setUpdate] = useState(false);

  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // comment functions
  const deleteComment = (newComment) => {
    const newCommentList = commentList.filter(j => newComment !== j);
    setCommentList(newCommentList);
  };

  const updateAndReset = (index, updatedComment) => {
    if (updatedComment.length >= 4) {
      const temporaryArray = [...commentList];
      temporaryArray[index].commentValue = updatedComment;
      setCommentList(temporaryArray);
      setComment('');
      setUpdate(false);
      setMessage('Comment Updated Successfully');
      setMessageType('success');
    }
    // else {
    //   setMessage('Comment cannot be less than 4 characters');
    //   setMessageType('error');
    // }
  };

  const onCancelUpdate = () => {
    setUpdate(false);
  };
  const pushAndReset = (newComment, setValue) => {
    if (newComment.length >= 4) {
      const commentObject = {
        userId: '5b5ca6857cf0b100209fe499',
        user: 'Rahul Sawantdesai',
        userRatings: 0,
        commentValue: newComment,
        time: 'May 1, 2020 11:21 PM',
        likes: 0,
        dislikes: 0,
      };
      setCommentList([...commentList, commentObject]);
      setValue('');
      setMessage('Comment Posted Successfully');
      setMessageType('success');
    }
    // else {
    //   setMessage('Comment cannot be less than 4 characters');
    //   setMessageType('error');
    // }
  };


  return (
    <div>
      <Headline5 style={{ margin: '15px 0px 10px 0px' }}>
        Comments
      </Headline5>
      <hr className="ba" style={{ borderColor: '#6200ee' }} />
      <div className="">
        <CommentBox endComment={comment} setEndComment={setComment} />
        <Button
          className=""
          style={{ float: 'right' }}
          onClick={() => { pushAndReset(comment, setComment); }}
          raised
        >
          Submit
        </Button>
      </div>
      <div style={{ marginTop: '40px' }} className="center">
        {
      (commentList.length === 0) ? (
        <div style={{ textAlign: 'center' }}>
          <img alt="nocomments" className="" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/arena_assets_comment_actions.webp" width="200px" />
          <Headline6 className="" style={{ margin: '2px 0px' }}>No Comments</Headline6>
        </div>
      ) : (
        commentList.map((newComment, index) => (
          <div key={index.toString()}>
            {
            (isUpdate) ? (
              <UpdateComment
                initialComment={newComment}
                onUpdateFunction={updateAndReset}
                index={index}
                onCancel={onCancelUpdate}
              />
            )
              : (
                <>
                  <Comment newComment={newComment} />
                  <div className="flex justify-between">
                    <LikeDislike />
                    <div className="flex justify-around pt1">
                      <Button
                        className=""
                        style={{ float: 'right' }}
                        onClick={() => {
                          deleteComment(newComment);
                          setMessage('Comment Deleted Successfully!');
                          setMessageType('success');
                        }}
                      >
                        Delete
                      </Button>
                      <Button
                        className=""
                        onClick={() => setUpdate(true)}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </>
              )
            }
            {/* message card */}
            <MessageCard
              message={message}
              messageType={messageType}
              setMessageType={setMessageType}
            />
          </div>
        ))
      )
      }
      </div>
    </div>
  );
};

export default DisplayComment;


// NoComments;
