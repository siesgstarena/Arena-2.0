import { useState, useEffect } from 'react';

// Custom hook to update local storage when the state changes
const useStateWithLocalStroage = (localStorageKey, initialValue) => {
  const [value, setValue] = useState(() =>
    // if the value exists in local storage then initilize it with that value
    JSON.parse(localStorage.getItem(localStorageKey))
      ? JSON.parse(localStorage.getItem(localStorageKey))
      : initialValue
  );
  // This hook helps to update the local storage everytime the state updates
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(value));
  }, [value, localStorageKey]);
  return [value, setValue];
};

export default useStateWithLocalStroage;
