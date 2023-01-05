import React from 'react';
import { useQuery } from '@apollo/client';
import Skeleton from 'react-loading-skeleton';
import { GET_ALL_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import PageCountDisplayer from '../../common/PageCountDisplayer';
import Ratings from './Ratings';
import useActivePageState from '../../../customHooks/useAcitvePageState';
import LoadingTable from '../../common/LoadingTable/index';

const RatingsContainer = () => {
  const limit = 50;
  const activePageNumber = useActivePageState();
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_ALL_RATINGS, {
    variables: { limit, skip: (activePageNumber - 1) * limit },
    notifyOnNetworkStatusChange: true,
  });
  if (loading) {
    return (
      <div>
        <div className="mb2 w-30">
          <Skeleton />
        </div>
        <LoadingTable tableHeadings={['#', 'Name', 'Ratings']} />
      </div>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratings) {
    const { users } = data.ratings;
    const { ratingsUpdatedTill } = data.ratings;
    return (
      <div>
        <Ratings
          users={users}
          activePageNumber={activePageNumber}
          limit={limit}
          ratingsUpdatedTill={ratingsUpdatedTill}
        />
        <div className="pt3">
          <PageCountDisplayer pageCount={data.ratings.pages} activePageNumber={activePageNumber} />
        </div>
      </div>
    );
  }
  if (isSessionExpired(data.ratings)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default RatingsContainer;
