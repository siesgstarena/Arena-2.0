import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import BlogContent from './BlogContent';
import { GET_BLOG_BY_BLOG_ID } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import LoadingTable from '../../../common/LoadingTable/index';
import useSentry from '../../../../customHooks/useSentry';

const BlogPage = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { blogId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_BLOG_BY_BLOG_ID, {
    variables: { id: blogId },
  });
  const { logError } = useSentry();

  if (loading) return <LoadingTable tableHeadings={['#', 'Points', 'Problem Name']} count={10} tableHeadingClassName="" />;
  if (error) {
    logError('blogById query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.blogById.blog) {
    const { blog } = data.blogById;
    return (
      <div className="mw8 center">
        <BlogContent blog={blog} />
      </div>
    );
  }
  if (isSessionExpired(data.blogById)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }

  // Random errors not handled by graphql
  logError('blogById query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default BlogPage;
