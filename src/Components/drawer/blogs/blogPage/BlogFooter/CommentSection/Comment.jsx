import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useApolloClient } from 'react-apollo';
import { useParams } from 'react-router';
import { Button } from '@material/react-button';
import { Headline6, Body2, Body1 } from '@material/react-typography';
import LikeDislike from '../LikeDislike';
import UpdateComment from './UpdateComment';
import AlertBox from '../../../../../common/AlertBox/index';
import MessageCard from '../../../../../common/MessageCard';
import {
  userColor,
  getDate,
  getMonth,
  getYear,
  convertTime,
  adding330Minutes,
} from '../../../../../../commonFunctions';
import AuthContext from '../../../../../../Contexts/AuthContext';
import {
  UPVOTE_COMMENT,
  DOWNVOTE_COMMENT,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from '../../../../../../graphql/mutations';
import { GET_COMMENTS_OF_BLOG } from '../../../../../../graphql/queries';
import useSessionExpired from '../../../../../../customHooks/useSessionExpired';

const Comment = ({ newComment }) => {
  const { userId: userObject, createdAt: time, content: commentValue } = newComment;
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const { authState } = useContext(AuthContext);
  const [editedComment, setEditedComment] = useState(commentValue);
  const [upvote, setUpvote] = useState(
    authState.user && newComment.upvote.includes(authState.user.userId)
  );
  // Added separate states for disabling because we wanted to disable the button,
  // the moment user clicks.We can't wait for the response to come back from server and then disable
  const [disableUpvote, setDisableUpvote] = useState(
    authState.user && newComment.upvote.includes(authState.user.userId)
  );
  const [disableDownvote, setDisableDownvote] = useState(
    authState.user && newComment.downvote.includes(authState.user.userId)
  );
  const [downvote, setDownvote] = useState(
    authState.user && newComment.downvote.includes(authState.user.userId)
  );
  const client = useApolloClient();
  const { blogId } = useParams();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  // isAlertOpen is the state, used to indicate whether the alertbox is open or not
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const alertTitle = 'Delete Confirmation';
  const alertContent = 'Are you sure you want to delete the comment?';
  const { name: user, ratings: userRatings, _id: userId } = userObject;
  const [isUpdate, setUpdate] = useState(false);
  const handleUpvote = async () => {
    setDisableUpvote(true);
    const { data, error } = await client.mutate({
      mutation: UPVOTE_COMMENT,
      variables: {
        id: newComment._id,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.upvoteComment.success) {
          const { comments } = cache.readQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
          });
          const commentsArray = comments.comments;
          const commentIndex = commentsArray.findIndex((obj) => obj._id === newComment._id);
          commentsArray[commentIndex] = {
            ...commentsArray[commentIndex],
            upvote: [...commentsArray[commentIndex].upvote, authState.user.userId],
            downvote: commentsArray[commentIndex].downvote.filter(
              (id) => id !== authState.user.userId
            ),
          };
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: [...commentsArray],
              },
            },
          });
        }
      },
    });
    if (error) {
      setDisableUpvote(false);
      setUpvote(false);
      setDownvote(true);
      return;
    }
    if (isSessionExpired(data.upvoteComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (
      data.upvoteComment.success ||
      data.upvoteComment.message === 'You have already upvoted for this comment'
    ) {
      setUpvote(true);
      setDisableUpvote(true);
      setDownvote(false);
      setDisableDownvote(false);
    } else {
      setUpvote(false);
      setDisableUpvote(false);
      setDownvote(true);
    }
  };
  const handleDownvote = async () => {
    const { data, error } = await client.mutate({
      mutation: DOWNVOTE_COMMENT,
      variables: {
        id: newComment._id,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.downvoteComment.success) {
          const { comments } = cache.readQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
          });
          // grabbing all the comments
          const commentsArray = comments.comments;
          // finding the index of comment to be updated
          const commentIndex = commentsArray.findIndex((obj) => obj._id === newComment._id);
          // updating the comment into consideration
          commentsArray[commentIndex] = {
            ...commentsArray[commentIndex],
            downvote: [...commentsArray[commentIndex].downvote, authState.user.userId],
            upvote: commentsArray[commentIndex].upvote.filter((id) => id !== authState.user.userId),
          };
          // writing the updated data into the cache
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: [...commentsArray],
              },
            },
          });
        }
      },
    });
    if (error) {
      setUpvote(true);
      setDownvote(false);
      setDisableDownvote(false);
      return;
    }
    if (isSessionExpired(data.downvoteComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (
      data.downvoteComment.success ||
      data.downvoteComment.message === 'You have already downvoted for this comment'
    ) {
      setUpvote(false);
      setDownvote(true);
      setDisableDownvote(true);
      setDisableUpvote(false);
    } else {
      setUpvote(true);
      setDownvote(false);
      setDisableDownvote(false);
    }
  };
  const handleUpdate = async () => {
    setMessageType('loading');
    setMessage('Editing comment, Please wait');
    const { data, error } = await client.mutate({
      mutation: EDIT_COMMENT,
      variables: {
        id: newComment._id,
        content: editedComment,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.editComment.success) {
          const { comments } = cache.readQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
          });
          // grabbing all the comments
          const commentsArray = comments.comments;
          // finding the index of comment to be updated
          const commentIndex = commentsArray.findIndex((obj) => obj._id === newComment._id);
          // updating the comment into consideration
          commentsArray[commentIndex] = {
            ...commentsArray[commentIndex],
            content: editedComment,
          };
          // writing the updated data into the cache
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: [...commentsArray],
              },
            },
          });
        }
      },
    });
    if (error) {
      setUpdate(false);
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.editComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.editComment.success) {
      setUpdate(false);
      setMessageType('success');
      setMessage('Comment successfully edited');
    } else {
      setUpdate(false);
      setMessageType('error');
      setMessage('An unexpected error has been encountered');
    }
  };

  const handleDelete = async () => {
    setMessageType('loading');
    setMessage('Deleting comment, Please wait');
    const { data, error } = await client.mutate({
      mutation: DELETE_COMMENT,
      variables: {
        id: newComment._id,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.deleteComment.success) {
          const { comments } = cache.readQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
          });
          // writing the updated data into the cache
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: comments.comments.filter((comment) => comment._id !== newComment._id),
                totalNumberOfComments: comments.totalNumberOfComments - 1,
              },
            },
          });
        }
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.deleteComment)) {
      redirectOnSessionExpiredAfterRender();
    }
    if (data.deleteComment.success === false) {
      setMessageType('error');
      setMessage('An unexpected error has been encountered');
    }
  };

  const onCancelUpdate = () => {
    setUpdate(false);
  };

  return (
    <div className="pa2 ba b--transparent br3 mb3">
      <div className="flex mt2">
        <img
          className="fr ba b--mid-gray"
          alt="user-icon"
          style={{ borderRadius: '50%', borderColor: userColor(userRatings, userId) }}
          height="40em"
          width="auto"
          src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp"
        />
        <div className="flex flex-column">
          <Link className="no-underline dim ml3" to={`/profile/${userId}`}>
            <Headline6
              style={{
                color: userColor(userRatings, userId),
                margin: '2px 2px 0px 0px',
                lineHeight: '1rem',
                fontSize: '17px',
              }}
            >
              {user}
            </Headline6>
          </Link>
          <Body2 className="ma0 mt1 ml3 mid-gray">
            {`${getDate(adding330Minutes(time))} ${getMonth(adding330Minutes(time))} ${getYear(
              adding330Minutes(time)
            )}, ${convertTime(adding330Minutes(time))} `}
          </Body2>
        </div>
      </div>
      <div>
        <div style={{ margin: '0', marginLeft: '3.6em', marginRight: '.5em' }}>
          <MessageCard
            message={message}
            messageType={messageType}
            setMessageType={setMessageType}
          />
        </div>
        <AlertBox
          isOpen={isAlertOpen}
          setIsOpen={setIsAlertOpen}
          title={alertTitle}
          content={alertContent}
          onAccept={handleDelete}
        />
        {isUpdate ? (
          <UpdateComment
            onUpdateFunction={handleUpdate}
            onCancel={onCancelUpdate}
            setEditedComment={setEditedComment}
            editedComment={editedComment}
          />
        ) : (
          <>
            <Body1 style={{ margin: '0', marginLeft: '3.6em' }}>{commentValue}</Body1>
            <div className="flex justify-between">
              <LikeDislike
                upvotes={newComment.upvote}
                downvotes={newComment.downvote}
                isUpvote={upvote}
                isDownvote={downvote}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
                disableDownvote={disableDownvote}
                disableUpvote={disableUpvote}
              />
              {authState.user && authState.user.userId === userId ? (
                <div className="flex justify-around pt1">
                  <Button style={{ padding: '0px' }} className="" onClick={() => setUpdate(true)}>
                    edit
                  </Button>
                  <Button
                    className="mr3"
                    style={{ float: 'right', padding: '0px' }}
                    onClick={() => setIsAlertOpen(true)}
                  >
                    Delete
                  </Button>
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
};

export default Comment;
