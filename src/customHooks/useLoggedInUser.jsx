import { useApolloClient } from '@apollo/client';
import { useCallback } from 'react';
import { GET_LOGGED_IN_USER } from '../graphql/queries';

const useLoggedInUser = () => {
  const client = useApolloClient();
  const addUserToCache = useCallback(
    (userDetails) => {
      // Writing down the user details on the cache
      client.writeQuery({
        query: GET_LOGGED_IN_USER,
        data: {
          getLoggedInUser: {
            __typename: 'loggedInUserInfo',
            name: userDetails.name,
            email: userDetails.email,
            userId: userDetails.userId,
          },
        },
      });
    },
    [client]
  );
  const removeUserFromCache = useCallback(() => {
    // Removing the user details from the cache
    client.writeQuery({
      query: GET_LOGGED_IN_USER,
      data: {
        getLoggedInUser: {
          __typename: 'loggedInUserInfo',
          name: null,
          email: null,
          userId: null,
        },
      },
    });
  }, [client]);
  return { addUserToCache, removeUserFromCache };
};

export default useLoggedInUser;
