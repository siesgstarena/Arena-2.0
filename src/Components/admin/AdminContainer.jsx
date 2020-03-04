/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams, useHistory } from 'react-router-dom';
import UserContext from '../../Contexts/UserContext';
import Spinner from '../common/Spinner/index';
import { GET_CONTEST_ADMIN_EMAIL_USER_EMAIL } from '../../graphql/queries';

const AdminContainer = (props) => {
  const { contestId } = useParams();
  const { children } = props;
  console.log(useParams());
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
  console.log(contestId, 'contestID');
  console.log(user.userId, 'userID');
  const { loading, data } = useQuery(GET_CONTEST_ADMIN_EMAIL_USER_EMAIL, {
    variables: { contestId, userId: user.userId },
  });
  console.log(data);
  if (loading) return <Spinner />;
  return (
    <div>
      {children}
    </div>
  );
};

export default AdminContainer;
