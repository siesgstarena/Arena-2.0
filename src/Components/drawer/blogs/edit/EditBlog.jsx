/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { useHistory, useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import Button from '@material/react-button';
import BlogDetails from '../create/BlogDetails';
import MessageCard from '../../../common/MessageCard';
import { EDIT_BLOG } from '../../../../graphql/mutations';

const EditBlog = ({ blogDetails }) => {
  const { title, content, tags } = blogDetails;
  const [blogTitle, setBlogTitle] = useState(title);
  const [blogContent, setBlogContent] = useState(content);
  const [blogTags, setBlogTags] = useState(tags.join());
  const { blogId } = useParams();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const client = useApolloClient();
  const history = useHistory();

  const handleEdit = async () => {
    setMessageType('loading');
    setMessage('Updating Blog, Please wait');
    const { data, error } = await client.mutate({
      mutation: EDIT_BLOG,
      variables: {
        id: blogId, title: blogTitle, content: blogContent, tags: blogTags,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.editBlog.success) {
      history.push({
        pathname: '/blogs',
        state: {
          snackbarMessage: 'Blog updated successfully',
        },
        // this snackbarMessage can cause state update issue on /blogs route
      });
    } else {
      setMessageType('error');
      setMessage(data.editBlog.message);
    }
  };
  return (
    <div className="mw7 pa2 center">
      <Headline4 className="purple">
        Edit blog
        -
        {title}
      </Headline4>
      <BlogDetails
        blogTitle={blogTitle}
        blogContent={blogContent}
        blogTags={blogTags}
        setBlogContent={setBlogContent}
        setBlogTags={setBlogTags}
        setBlogTitle={setBlogTitle}
      />
      <MessageCard setMessageType={setMessageType} message={message} messageType={messageType} />
      <Button outlined className="" onClick={handleEdit}>
        Edit Blog
      </Button>
    </div>
  );
};

EditBlog.propTypes = {
  blogDetails: PropTypes.object.isRequired,
};

export default EditBlog;
