import React, { useContext } from 'react';
import { Headline6 } from '@material/react-typography';
import { useQuery } from '@apollo/react-hooks';
import { GET_BLOGS_BY_USER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import AuthContext from '../../../Contexts/AuthContext';
import BlogsArray from './BlogsArray';
import LoadingCardArray from '../../common/LoadingCardArray';
import { myBlogsLimit } from '../../../constants';

const MyBlogsContainer = () => {
  const limit = myBlogsLimit;
  const { authState } = useContext(AuthContext);
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_BLOGS_BY_USER, {
    variables: { limit, skip: (activePageNumber - 1) * limit, id: authState.user.userId },
  });
  if (loading) {
    return (
      <div className="mw7 center pa2 pt3">
        <Headline6 className="ma0 purple tc mt2 mb3">{`${authState.user.name.trim()}'s blogs`}</Headline6>
        <LoadingCardArray count={limit} />
      </div>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.blogByUser) {
    const { blogs } = data.blogByUser;
    return (
      <div className="mw7 center pa2 pt3">
        <Headline6 className="ma0 purple tc mt2 mb3">{`${authState.user.name.trim()}'s blogs`}</Headline6>
        <BlogsArray showCreateButton blogs={blogs} pageCount={data.blogByUser.pages} />
      </div>
    );
  }
  if (isSessionExpired(data.blogByUser)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default MyBlogsContainer;
