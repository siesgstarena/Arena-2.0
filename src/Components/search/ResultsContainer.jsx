import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import LoadingCardArray from '../common/LoadingCardArray';
import Results from './results/Results';
import { GET_SEARCH_RESULTS } from '../../graphql/queries';
import SomethingWentWrong from '../common/SomethingWentWrong/index';
import useSessionExpired from '../../customHooks/useSessionExpired';
import EmptyData from '../common/EmptyData';
import useSentry from '../../customHooks/useSentry';

const ResultsContainer = () => {
  const location = useLocation();
  const searchParams = queryString.parse(location.search);
  const { q } = searchParams;
  const { logError } = useSentry();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_SEARCH_RESULTS, {
    variables: {
      text: q,
    },
  });

  if (loading) return <LoadingCardArray count={10} loadingCardClassName="mt4 mb4" />;
  if (error) {
    logError('search query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.search) {
    const { users, blogs, problems } = data.search;
    return (
      <div className="">
        {
          (users && users.length !== 0) || (blogs && blogs.length !== 0)
          || (problems && problems.length !== 0)
            ? (
              <Results users={users} blogs={blogs} problems={problems} />
            )
            : <EmptyData message="No Results found. You can search for users, blogs or problems" imageUrl="https://res.cloudinary.com/ashokc/image/upload/f_auto,q_auto/v1589000427/arena/assets/undraw_web_search_eetr_ja4d57.svg" />
        }

      </div>
    );
  }
  if (isSessionExpired(data.search)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  logError('search query', { ...data, ...error });
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default ResultsContainer;
