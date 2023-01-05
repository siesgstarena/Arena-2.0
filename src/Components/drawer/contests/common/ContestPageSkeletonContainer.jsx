import React from 'react';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GET_CONTEST_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ContestPageSkeleton from './ContestPageSkeleton';
import Spinner from '../../../common/Spinner/index';

const ContestPageSkeletonContainer = ({ children }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_CONTEST_DETAILS, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.contestCode) {
    const contestDetails = data.contestCode;
    return <ContestPageSkeleton contestDetails={contestDetails}>{children}</ContestPageSkeleton>;
  }
  if (isSessionExpired(data.contestCode)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

ContestPageSkeletonContainer.propTypes = {
  children: PropTypes.any,
};

export default ContestPageSkeletonContainer;
