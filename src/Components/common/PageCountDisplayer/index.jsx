import React from 'react';
import PropTypes from 'prop-types';
import PageBlock from './PageBlock';

const PageCountDisplayer = ({
  pageCount, onLoadMore, setActivePageNumber, activePageNumber, limit,
}) => {
  const pageCountDisplayerArray = [];
  let i = 0;
  for (i = 0; i < pageCount; i += 1) {
    pageCountDisplayerArray.push(
      <PageBlock
        key={i + 1}
        pageNumber={i + 1}
        onLoadMore={onLoadMore}
        limit={limit}
        setActivePageNumber={setActivePageNumber}
        activePageNumber={activePageNumber}
      />,
    );
  }
  return (
    <div className="tc">
      {pageCountDisplayerArray}
    </div>
  );
};

PageCountDisplayer.propTypes = {
  pageCount: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  activePageNumber: PropTypes.number.isRequired,
  setActivePageNumber: PropTypes.func.isRequired,
};

export default PageCountDisplayer;
