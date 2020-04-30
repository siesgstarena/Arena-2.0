import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_ALL_USERS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import Spinner from '../../common/Spinner/index';
import CreateContest from './CreateContest';
import SuperuserContainer from '../SuperuserContainer';


const CreateContestContainer = () => {
  const {
    loading, error, data,
  } = useQuery(GET_ALL_USERS);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.users) {
    const { users } = data;
    return (
      <SuperuserContainer>
        <CreateContest users={users} />
      </SuperuserContainer>
    );
  }

  // case for random errors which are not handled by graphql
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default CreateContestContainer;
