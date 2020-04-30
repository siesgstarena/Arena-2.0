import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_RATINGS_CHANGE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ContestTabBar from '../common/ContestTabBar';
import RatingChangesTable from './RatingChangesTable';
import Spinner from '../../../common/Spinner/index';

const ContestDashboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_RATINGS_CHANGE, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.ratingChanges) {
    const { ratingChanges } = data;
    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <ContestTabBar />
        </div>
        <RatingChangesTable ratingChanges={ratingChanges} />
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
