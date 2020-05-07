import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useApolloClient } from 'react-apollo';
import { useParams } from 'react-router';
import { Button } from '@material/react-button';
import { Headline6 } from '@material/react-typography';
import LikeDislike from '../LikeDislike';
import UpdateComment from './UpdateComment';
import {
  userColor, getDate, getMonth, getYear, convertTime,
} from '../../../../../../commonFunctions';
import AuthContext from '../../../../../../Contexts/AuthContext';
import { UPVOTE_COMMENT, DOWNVOTE_COMMENT } from '../../../../../../graphql/mutations';
import { GET_COMMENTS_OF_BLOG } from '../../../../../../graphql/queries';
import useSessionExpired from '../../../../../../customHooks/useSessionExpired';

const Comment = ({
  newComment, updateAndReset, onCancelUpdate, deleteComment,
}) => {
  const {
    userId: userObject, createdAt: time, content: commentValue,
  } = newComment;
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const { authState } = useContext(AuthContext);
  const [upvote, setUpvote] = useState(authState.user
    && newComment.upvote.includes(authState.user.userId));
  const [downvote, setDownvote] = useState(authState.user
    && newComment.downvote.includes(authState.user.userId));
  const client = useApolloClient();
  const { blogId } = useParams();
  const { name: user, ratings: userRatings, _id: userId } = userObject;
  const [isUpdate, setUpdate] = useState(false);
  const handleUpvote = async () => {
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
          const commentIndex = commentsArray.findIndex((obj => obj._id === newComment._id));
          commentsArray[commentIndex] = {
            ...commentsArray[commentIndex],
            upvote: [...commentsArray[commentIndex].upvote, authState.user.userId],
            downvote: commentsArray[commentIndex].downvote.filter(
              id => id !== authState.user.userId,
            ),
          };
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: [
                  ...commentsArray,
                ],
              },
            },
          });
        }
      },
    });
    if (error) {
      setUpvote(false);
      setDownvote(true);
      return;
    }
    if (isSessionExpired(data.upvoteComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.upvoteComment.success || data.upvoteComment.message === 'You have already upvoted for this comment') {
      setUpvote(true);
      setDownvote(false);
    } else {
      setUpvote(false);
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
          const commentIndex = commentsArray.findIndex((obj => obj._id === newComment._id));
          // updating the comment into consideration
          commentsArray[commentIndex] = {
            ...commentsArray[commentIndex],
            downvote: [...commentsArray[commentIndex].downvote, authState.user.userId],
            upvote: commentsArray[commentIndex].upvote.filter(id => id !== authState.user.userId),
          };
          // writing the updated data into the cache
          cache.writeQuery({
            query: GET_COMMENTS_OF_BLOG,
            variables: { id: blogId },
            data: {
              comments: {
                ...comments,
                comments: [
                  ...commentsArray,
                ],
              },
            },
          });
        }
      },
    });
    if (error) {
      setUpvote(true);
      setDownvote(false);
      return;
    }
    if (isSessionExpired(data.downvoteComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.downvoteComment.success || data.downvoteComment.message === 'You have already downvoted for this comment') {
      setUpvote(false);
      setDownvote(true);
    } else {
      setUpvote(true);
      setDownvote(false);
    }
  };

  return (
    <div className="pa2 ba b--transparent br3 mb3">
      <div className="flex mt2">
        <img className="fr ba b--mid-gray" alt="user-icon" style={{ borderRadius: '50%' }} height="40em" width="auto" src="https://res.cloudinary.com/siesgstarena/image/upload/f_auto,q_auto/v1546283328/arena/assets_webp/gravatar.webp" />
        <div className="flex flex-column">
          <Link
            className="no-underline dim ml3"
            to={`/profile/${userId}`}
          >
            <Headline6 style={{
              color: userColor(userRatings, userId), margin: '2px 2px 0px 0px', lineHeight: '1rem', fontSize: '17px',
            }}
            >
              {user}
            </Headline6>
          </Link>
          <span className="mt1 ml3" style={{ fontSize: '15px' }}>{`${getDate(time)} ${getMonth(time)} ${getYear(time)}, ${convertTime(time)} `}</span>
        </div>
      </div>
      <div>
        {
          (isUpdate) ? (
            <UpdateComment
              initialComment={newComment}
              onUpdateFunction={updateAndReset}
              setUpdate={setUpdate}
              onCancel={onCancelUpdate}
            />
          ) : (
            <>
              <Headline6 style={{ margin: '0.5em 3.1em', fontSize: '18px' }}>{commentValue}</Headline6>
              <div className="flex justify-between">
                <LikeDislike
                  upvotes={newComment.upvote}
                  downvotes={newComment.downvote}
                  isUpvote={upvote}
                  isDownvote={downvote}
                  onUpvote={handleUpvote}
                  onDownvote={handleDownvote}
                />
                {
                  authState.user && authState.user.userId === userId
                    ? (
                      <div className="flex justify-around pt1">
                        <Button
                          className="mr3"
                          style={{ float: 'right', padding: '0px' }}
                          onClick={() => {
                            deleteComment(newComment);
                          }}
                        >
                          Delete
                        </Button>
                        <Button
                          style={{ padding: '0px' }}
                          className=""
                          onClick={() => setUpdate(true)}
                        >
                          edit
                        </Button>
                      </div>
                    ) : null
                  }
              </div>
            </>
          )
        }
      </div>
    </div>
  );
};


Comment.propTypes = {
  newComment: PropTypes.object.isRequired,
  updateAndReset: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  onCancelUpdate: PropTypes.func.isRequired,
};

export default Comment;
