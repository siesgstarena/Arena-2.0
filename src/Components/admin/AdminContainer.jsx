import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_IS_USER_ADMIN } from '../../graphql/queries';
import SomethingWentWrong from '../common/SomethingWentWrong/index';
import useSessionExpired from '../../customHooks/useSessionExpired';
import Spinner from '../common/Spinner/index';

const AdminContainer = ({ children, contestCode }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(GET_IS_USER_ADMIN, {
    variables: { code: contestCode },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.isAdmin.isAdmin) {
    return children;
  }
  if (data.isAdmin.message.toLowerCase() === 'you are not superuser or admin') {
    return <SomethingWentWrong message="You are not a superuser or admin" />;
  }
  if (isSessionExpired(data.isAdmin)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }

  return <Spinner />;
};

AdminContainer.propTypes = {
  children: PropTypes.object.isRequired,
  contestCode: PropTypes.string.isRequired,
};

export default AdminContainer;
