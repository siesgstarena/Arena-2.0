import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_USERS_SUPERUSER } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import Spinner from '../../common/Spinner/index';
import CreateContest from './CreateContest';


const CreateContestContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_ALL_USERS_SUPERUSER);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.users && data.isSuperuser.isSuperuser) {
    const { users } = data;
    return <CreateContest users={users} />;
  }
  if (isSessionExpired(data.users)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default CreateContestContainer;
