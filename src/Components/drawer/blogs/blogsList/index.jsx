import React from 'react';
import { useQuery } from '@apollo/client';
import { Headline5 } from '@material/react-typography';
import PropTypes from 'prop-types';
import { GET_ALL_BLOGS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import useActivePageState from '../../../../customHooks/useAcitvePageState';
import LoadingCardArray from '../../../common/LoadingCardArray';
import BlogsArray from '../../../user/myBlogs/BlogsArray';
import { allBlogsLimit } from '../../../../utils/constants';

const AllBlogsPageContainer = ({ isSuperuserRoute = false }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const limit = allBlogsLimit;
  const activePageNumber = useActivePageState();
  const { loading, error, data } = useQuery(GET_ALL_BLOGS, {
    variables: { limit, skip: (activePageNumber - 1) * limit },
  });

  if (loading) {
    return (
      <div className="mw7 ma3 pa2 center">
        <Headline5 className="purple ma0 ml1 mb4">SIESGSTarena&apos;s Blogs</Headline5>
        <LoadingCardArray count={limit} />
      </div>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogs) {
    const { blogs } = data.blogs;
    return (
      <div className="mw7 ma3 pa2 center">
        <Headline5 className="purple ma0 ml1 mb4">SIESGSTarena&apos;s Blogs</Headline5>
        <BlogsArray
          blogs={blogs}
          isSuperuserRoute={isSuperuserRoute}
          pageCount={data.blogs.pages}
        />
      </div>
    );
  }
  if (isSessionExpired(data.blogs)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

AllBlogsPageContainer.propTypes = {
  isSuperuserRoute: PropTypes.bool,
};

export default AllBlogsPageContainer;
