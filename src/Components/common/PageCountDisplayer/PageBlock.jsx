import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const PageBlock = ({
  activePageNumber, pageNumber, setActivePageNumber, onLoadMore, limit,
}) => {
  const updateActivePageNumberAndData = () => {
    setActivePageNumber(pageNumber);
    onLoadMore((pageNumber - 1) * limit);
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
  setActivePageNumber: PropTypes.func.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  limit: PropTypes.number.isRequired,
};

export default PageBlock;
