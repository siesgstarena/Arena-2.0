import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { GET_IS_USER_ADMIN } from '../../graphql/queries';
import SomethingWentWrong from '../common/SomethingWentWrong/index';
import useSessionExpired from '../../customHooks/useSessionExpired';
import Spinner from '../common/Spinner/index';
import useSentry from '../../customHooks/useSentry';

const AdminContainer = ({ contestCode, loadingScreen = <Spinner />, component }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { logError } = useSentry();
  const {
    loading, error, data,
  } = useQuery(GET_IS_USER_ADMIN, {
    variables: { code: contestCode },
  });

  if (loading) {
    return loadingScreen;
  }
  if (error) {
    logError('isAdmin query', { ...data, ...error });
    return <SomethingWentWrong message="An error has been encountered." />;
  }
  if (data.isAdmin.isAdmin) {
    // If the user is admin run the component
    return component;
  }
  if (data.isAdmin.message.toLowerCase() === 'you are not superuser or admin') {
    return <SomethingWentWrong message="You are not a superuser or admin" />;
  }
  if (isSessionExpired(data.isAdmin)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }

  // random error not handled by graphql
  return <SomethingWentWrong message="An error has been encountered." />;
};

AdminContainer.propTypes = {
  component: PropTypes.object.isRequired,
  contestCode: PropTypes.string.isRequired,
  loadingScreen: PropTypes.object,
};

export default AdminContainer;
