import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_NEW_RATINGS } from '../../../graphql/queries';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
import Spinner from '../../common/Spinner/index';
import UpdateRatings from './UpdateRatings';

const UpdateRatingsContainer = () => {
  const { contestId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_NEW_RATINGS, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.calculateNewRatings) {
    const ratingsData = data.calculateNewRatings;
    return (
      <UpdateRatings ratingsData={ratingsData} />
    );
  }

  // case for random errors which are not handled by graphql
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default UpdateRatingsContainer;
