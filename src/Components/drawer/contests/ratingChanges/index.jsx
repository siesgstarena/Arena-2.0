import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_RATINGS_CHANGE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import RatingChangesTable from './RatingChangesTable';
import EmptyData from '../../../common/EmptyData';
import LoadingTable from '../../../common/LoadingTable/index';

const ContestDashboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_RATINGS_CHANGE, {
    variables: { code: contestId },
  });
  const tableHeadings = ['#', 'Who', 'Δ', 'Rating'];
  if (loading) return <LoadingTable tableHeadings={tableHeadings} count={20} />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratingChanges) {
    const { ratingChanges } = data;
    return (
      <div>
        {ratingChanges.length !== 0 ? (
          <RatingChangesTable ratingChanges={ratingChanges} />
        ) : (
          <EmptyData message="Ratings have not been updated yet. Come back later." />
        )}
      </div>
    );
  }
  if (isSessionExpired(data.ratingChanges)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ContestDashboardContainer;
