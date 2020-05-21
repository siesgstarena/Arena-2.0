import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material/react-button';
import { useApolloClient } from 'react-apollo';
import { useParams } from 'react-router';
import { Headline5 } from '@material/react-typography';
import '@material/react-material-icon/dist/material-icon.css';
import MessageCard from '../../../../common/MessageCard';
import CommentSectionContainer from './CommentSection/CommentSectionContainer';
import './BlogFooter.css';
import LikeDislike from './LikeDislike';
import ShareIcon from './ShareIcon';
import CommentBox from './CommentSection/CommentBox';
import { UPVOTE_BLOG, DOWNVOTE_BLOG, WRITE_COMMENT } from '../../../../../graphql/mutations';
import { GET_COMMENTS_OF_BLOG } from '../../../../../graphql/queries';
import useSessionExpired from '../../../../../customHooks/useSessionExpired';
import AuthContext from '../../../../../Contexts/AuthContext';

const BlogFooter = ({ upvotes, downvotes }) => {
  const [comment, setComment] = useState('');
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const { authState } = useContext(AuthContext);
  // Added separate states for disabling because we wanted to disable the button,
  // the moment user clicks.We can't wait for the response to come back from server and then disable
  const [disableUpvote, setDisableUpvote] = useState(
    authState.user && upvotes.includes(authState.user.userId)
  );
  const [disableDownvote, setDisableDownvote] = useState(
    authState.user && downvotes.includes(authState.user.userId)
  );
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const { blogId } = useParams();

  const handleUpvote = async () => {
    // disabling the button so that user cannot repeatedly click on it
    setDisableUpvote(true);
    const { data, error } = await client.mutate({
      mutation: UPVOTE_BLOG,
      variables: {
        id: blogId,
      },
    });
    if (error) {
      setDisableUpvote(false);
      return;
    }
    if (isSessionExpired(data.upvoteBlog)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (
      data.upvoteBlog.success ||
      data.upvoteBlog.message === 'You have already upvoted for this post'
    ) {
      // If the upvote is successfull then we enable the downvote button
      setDisableDownvote(false);
    } else {
      setDisableUpvote(false);
    }
  };

  const handleDownvote = async () => {
    // disabling the button so that user cannot repeatedly click on it
    setDisableDownvote(true);
    const { data, error } = await client.mutate({
      mutation: DOWNVOTE_BLOG,
      variables: {
        id: blogId,
      },
    });
    if (error) {
      setDisableDownvote(false);
      return;
    }
    if (isSessionExpired(data.downvoteBlog)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (
      data.downvoteBlog.success ||
      data.downvoteBlog.message === 'You have already downvoted for this post'
    ) {
      // If the downvote is successfull then we enable the upvote button
      setDisableUpvote(false);
    } else {
      setDisableDownvote(false);
    }
  };

  const handleCreate = async () => {
    setMessageType('loading');
    setMessage('Creating comment, Please wait');
    const { data, error } = await client.mutate({
      mutation: WRITE_COMMENT,
      variables: {
        id: blogId,
        content: comment,
      },
      // used refetchQueries because I was not able to get all the details of the user
      refetchQueries: [
        {
          query: GET_COMMENTS_OF_BLOG,
          variables: { id: blogId },
        },
      ],
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.writeComment)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.writeComment.success) {
      setComment('');
      setMessageType('success');
      setMessage('Comment successfully created');
    } else {
      setMessageType('error');
      setMessage('An unexpected error has been encountered');
    }
  };

  return (
    <div className="center ">
      {/* like dislike and share section  */}
      <div className="flex justify-between mr1">
        <LikeDislike
          upvotes={upvotes}
          downvotes={downvotes}
          isUpvote={authState.user && upvotes.includes(authState.user.userId)}
          isDownvote={authState.user && downvotes.includes(authState.user.userId)}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
          disableUpvote={disableUpvote}
          disableDownvote={disableDownvote}
        />
        <ShareIcon />
      </div>
      {/* comment section  */}
      <Headline5 style={{ margin: '15px 0px 10px 0px' }}>Comments</Headline5>
      <hr className="ba" style={{ borderColor: '#6200ee' }} />
      <div className="">
        <CommentBox endComment={comment} setEndComment={setComment} />
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
        <Button className="" style={{ float: 'right' }} onClick={handleCreate} raised>
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
