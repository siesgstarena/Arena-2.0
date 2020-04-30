import { useEffect, useState } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const useActivePageState = () => {
  const location = useLocation();
  const value = queryString.parse(location.search);

  // setting the initial value as the value of the page number shown in the search query
  const [activePageNumber, setActivePageNumber] = useState(
    value.pageNumber ? Number(value.pageNumber) : 1,
  );

  // Here update the activePage number when the search query is updated
  useEffect(() => {
    setActivePageNumber(value.pageNumber ? Number(value.pageNumber) : 1);
  }, [value.pageNumber]);
  return activePageNumber;
};

export default useActivePageState;
