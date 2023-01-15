import React, { useState, useContext } from 'react';
import { Headline4 } from '@material/react-typography';
import Button from '@material/react-button';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/client';
import MessageCard from '../../../common/MessageCard';
import BlogDetails from './BlogDetails';
import { CREATE_BLOG } from '../../../../graphql/mutations';
import { GET_ALL_BLOGS, GET_BLOGS_BY_USER } from '../../../../graphql/queries';
import { allBlogsLimit, profileMyPostsLimit, myBlogsLimit } from '../../../../utils/constants';
import AuthContext from '../../../../Contexts/AuthContext';

const CreateBlog = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [blogTags, setBlogTags] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const history = useHistory();
  const { authState } = useContext(AuthContext);

  const handleCreate = async () => {
    setMessageType('loading');
    setMessage('Creating Blog, Please wait');
    const { data, error } = await client.mutate({
      mutation: CREATE_BLOG,
      variables: {
        title: blogTitle,
        content: blogContent,
        tags: blogTags,
      },
      refetchQueries: [
        {
          query: GET_ALL_BLOGS,
          variables: { skip: 0, limit: allBlogsLimit },
        },
        {
          query: GET_BLOGS_BY_USER,
          variables: { skip: 0, limit: myBlogsLimit, id: authState.user.userId },
        },
        {
          query: GET_BLOGS_BY_USER,
          variables: { skip: 0, limit: profileMyPostsLimit, id: authState.user.userId },
        },
      ],
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.createBlog.success) {
      history.push({
        pathname: '/blogs',
        state: {
          snackbarMessage: 'Blog created successfully',
        },
      });
    } else {
      setMessageType('error');
      setMessage(data.createBlog.message);
    }
  };

  return (
    <div className="mw7 pa2 center">
      <Headline4 className="purple">Create a blog</Headline4>
      <BlogDetails
        blogTitle={blogTitle}
        blogContent={blogContent}
        blogTags={blogTags}
        setBlogContent={setBlogContent}
        setBlogTags={setBlogTags}
        setBlogTitle={setBlogTitle}
      />
      <MessageCard setMessageType={setMessageType} message={message} messageType={messageType} />
      <Button outlined className="" onClick={handleCreate}>
        Create Blog
      </Button>
    </div>
  );
};

export default CreateBlog;
