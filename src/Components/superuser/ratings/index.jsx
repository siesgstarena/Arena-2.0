import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_CONTEST_DETAILS_SUPERUSER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import Spinner from '../../common/Spinner/index';
import Ratings from './Ratings';


const RatingsContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_CONTEST_DETAILS_SUPERUSER, {
    variables: { limit: 150, skip: 0 },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.allContests && data.isSuperuser.isSuperuser) {
    const { contests } = data.allContests;
    return <Ratings contests={contests} />;
  }
  if (isSessionExpired(data.allContests)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default RatingsContainer;
