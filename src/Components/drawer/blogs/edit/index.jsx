import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_BLOG_BY_ID } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import Spinner from '../../../common/Spinner';
import EditBlog from './EditBlog';

const EditContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { blogId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_BLOG_BY_ID, { variables: { id: blogId } });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogById) {
    const response = data.blogById.blog;
    return (
      <EditBlog
        blogDetails={response}
      />
    );
  }
  if (isSessionExpired(data.blogById)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message={data.blogById.message} />;
};

export default EditContainer;
