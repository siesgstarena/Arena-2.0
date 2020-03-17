/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';

const AdminContainer = (props) => {
  const { children } = props;
  const { user } = useContext(UserContext);
  const history = useHistory();

  // To check if the user is logged in or not
  if (!user) {
    history.push({
      pathname: '/auth/signin',
      state: {
        messageType: 'error',
        message: 'Please login to continue',
      },
    });
    return null;
  }
  return (
    <>
      {children}
    </>
  );
};

export default AdminContainer;
