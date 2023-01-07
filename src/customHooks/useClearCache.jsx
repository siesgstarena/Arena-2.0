import { useApolloClient } from '@apollo/client';
import useLoggedInUser from './useLoggedInUser';

const useClearCache = () => {
  const client = useApolloClient();
  const { removeUserFromCache } = useLoggedInUser();

  const clearEntireCache = () => {
    // Resetting all queries and mutations
    client.cache.reset();
    // Remove the user from cache
    removeUserFromCache();
  };

  return { clearEntireCache };
};

export default useClearCache;
