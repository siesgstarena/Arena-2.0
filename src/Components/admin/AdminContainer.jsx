/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import Spinner from '../common/Spinner/index';
import { GET_CONTEST_ADMIN_EMAIL_USER_EMAIL } from '../../graphql/queries';

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

  const { userId } = user;
  const { loading, error, data } = useQuery(GET_CONTEST_ADMIN_EMAIL_USER_EMAIL, {
    variables: { code: contestId, _id: userId },
  });

  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  if (data) {
    // Checking if the user is admin or not
    const userEmail = data.userById.email;
    let authorizedUser = false;
    data.contestCode.contestAdmin.forEach((element) => {
      if (element.email === userEmail) {
        authorizedUser = true;
      }
    });
    if (!authorizedUser) {
      history.push(`/profile/${userId}`);
    } else {
      return (
        <div>
          {children}
        </div>
      );
    }
  }
  return <Spinner />;
};

export default AdminContainer;
