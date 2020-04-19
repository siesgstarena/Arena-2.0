import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

const PageBlock = ({
  activePageNumber, pageNumber,
}) => {
  const history = useHistory();
  const location = useLocation();
  const updateActivePageNumberAndData = () => {
    history.push({
      pathname: location.pathname,
      search: `?pageNumber=${pageNumber}`,
    });
  };
  if (activePageNumber === pageNumber) {
    return (
      <div
        role="presentation"
        className="page-block ma1 br2"
        style={{
          background: '#f0e8ff',
          color: 'purple',
        }}
        onClick={updateActivePageNumberAndData}
      >
        {pageNumber}
      </div>
    );
  }
  return (
    <div
      role="presentation"
      className="page-block ma1 br2"
      onClick={updateActivePageNumberAndData}
    >
      {pageNumber}
    </div>
  );
};

PageBlock.propTypes = {
  activePageNumber: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
};

export default PageBlock;
