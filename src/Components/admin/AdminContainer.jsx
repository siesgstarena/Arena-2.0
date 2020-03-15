/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import Spinner from '../common/Spinner/index';
import SomethingWentWrong from '../common/SomethingWentWrong/index';
import { GET_IS_USER_ADMIN } from '../../graphql/queries';

// This component checks whether the user is a valid admin or not

const AdminContainer = (props) => {
  const { contestId } = useParams();
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

  // const { userId } = user;
  const { loading, error, data } = useQuery(GET_IS_USER_ADMIN, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="Selected Contest Doesn't exist" />;
  if (data) {
    // Checking if the user is admin or not
    if (!data.isAdmin.isAdmin) {
      return <SomethingWentWrong message="You are not authorized to view this page as you are not an admin of the contest" />;
    }

    return (
      <div>
        {children}
      </div>
    );
  }
  return <Spinner />;
};

export default AdminContainer;
