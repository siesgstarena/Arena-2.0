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
import { GET_BLOG_BY_BLOG_ID, GET_COMMENTS_OF_BLOG } from '../../../../../graphql/queries';
import useSessionExpired from '../../../../../customHooks/useSessionExpired';
import AuthContext from '../../../../../Contexts/AuthContext';


const BlogFooter = ({ upvotes, downvotes }) => {
  const [comment, setComment] = useState('');
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();
  const { authState } = useContext(AuthContext);
  const [upvote, setUpvote] = useState(authState.user && upvotes.includes(authState.user.userId));
  const [downvote, setDownvote] = useState(authState.user
    && downvotes.includes(authState.user.userId));
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const { blogId } = useParams();
  const handleUpvote = async () => {
    const { data, error } = await client.mutate({
      mutation: UPVOTE_BLOG,
      variables: {
        id: blogId,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.upvoteBlog.success) {
          const { blogById } = cache.readQuery({
            query: GET_BLOG_BY_BLOG_ID,
            variables: { id: blogId },
          });
          cache.writeQuery({
            query: GET_BLOG_BY_BLOG_ID,
            variables: { id: blogId },
            data: {
              blogById: {
                ...blogById,
                blog: {
                  ...blogById.blog,
                  // adding the current user in the list of upvotes
                  upvote: [...blogById.blog.upvote, authState.user.userId],
                  // removing the current user from the list of downvotes
                  // I ma doing both the operations because the user cannot be
                  // in both lists at the same time
                  downvote: blogById.blog.downvote.filter(id => id !== authState.user.userId),
                },
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
    if (isSessionExpired(data.upvoteBlog)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.upvoteBlog.success || data.upvoteBlog.message === 'You have already upvoted for this post') {
      setUpvote(true);
      setDownvote(false);
    } else {
      setUpvote(false);
      setDownvote(true);
    }
  };
  const handleDownvote = async () => {
    const { data, error } = await client.mutate({
      mutation: DOWNVOTE_BLOG,
      variables: {
        id: blogId,
      },
      update: (cache, { data: mutationResponse }) => {
        if (mutationResponse.downvoteBlog.success) {
          const { blogById } = cache.readQuery({
            query: GET_BLOG_BY_BLOG_ID,
            variables: { id: blogId },
          });
          cache.writeQuery({
            query: GET_BLOG_BY_BLOG_ID,
            variables: { id: blogId },
            data: {
              blogById: {
                ...blogById,
                blog: {
                  ...blogById.blog,
                  // removing the current user from the list of upvotes
                  // I ma doing both the operations because the user cannot
                  // be in both lists at the same time
                  upvote: blogById.blog.upvote.filter(id => id !== authState.user.userId),
                  // adding the current user in the list of downvotes
                  downvote: [...blogById.blog.downvote, authState.user.userId],
                },
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
    if (isSessionExpired(data.downvoteBlog)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.downvoteBlog.success || data.downvoteBlog.message === 'You have already downvoted for this post') {
      setUpvote(false);
      setDownvote(true);
    } else {
      setUpvote(true);
      setDownvote(false);
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
      refetchQueries: [{
        query: GET_COMMENTS_OF_BLOG,
        variables: { id: blogId },
      }],
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
          isUpvote={upvote}
          isDownvote={downvote}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        <ShareIcon />
      </div>
      {/* comment section  */}
      <Headline5 style={{ margin: '15px 0px 10px 0px' }}>
        Comments
      </Headline5>
      <hr className="ba" style={{ borderColor: '#6200ee' }} />
      <div className="">
        <CommentBox endComment={comment} setEndComment={setComment} />
        <MessageCard
          message={message}
          messageType={messageType}
          setMessageType={setMessageType}
        />
        <Button
          className=""
          style={{ float: 'right' }}
          onClick={handleCreate}
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
