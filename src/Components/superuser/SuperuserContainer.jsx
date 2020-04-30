import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { IS_SUPERUSER } from '../../graphql/queries';
import SomethingWentWrong from '../common/SomethingWentWrong/index';
import useSessionExpired from '../../customHooks/useSessionExpired';
import Spinner from '../common/Spinner/index';

const SuperuserContainer = ({ children }) => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const {
    loading, error, data,
  } = useQuery(IS_SUPERUSER);

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.isSuperuser.isSuperuser) {
    return children;
  }
  if (data.isSuperuser.message.toLowerCase() === 'you are not superuser or admin') {
    return <SomethingWentWrong message="You are not a superuser" />;
  }
  if (isSessionExpired(data.isSuperuser)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }

  return <Spinner />;
};

SuperuserContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default SuperuserContainer;
