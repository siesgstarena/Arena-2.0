import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const PageBlock = ({ activePageNumber, pageNumber, setActivePageNumber }) => {
  if (activePageNumber === pageNumber) {
    return (
      <div
        role="presentation"
        className="page-block ma1 br2"
        style={{
          background: '#f0e8ff',
          color: 'purple',
        }}
        onClick={() => setActivePageNumber(pageNumber)}
      >
        {pageNumber}
      </div>
    );
  }
  return (
    <div
      role="presentation"
      className="page-block ma1 br2"
      onClick={() => setActivePageNumber(pageNumber)}
    >
      {pageNumber}
    </div>
  );
};

PageBlock.propTypes = {
  activePageNumber: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired,
  setActivePageNumber: PropTypes.func.isRequired,
};

export default PageBlock;
