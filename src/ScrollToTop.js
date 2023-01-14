import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const usePrevLocation = () => {
  const location = useLocation();
  const prevLocRef = useRef(location);

  useEffect(() => {
    prevLocRef.current = location;
  }, [location]);

  return prevLocRef.current;
};

const ScrollToTop = ({ children }) => {
  const { pathname: prevPath, search: prevSearch } = usePrevLocation();
  const { pathname: currentPath, search: currentSearch } = useLocation();
  if (currentPath !== prevPath || currentSearch !== prevSearch) {
    window.scrollTo(0, 0);
  }
  return children;
};

ScrollToTop.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ScrollToTop;
