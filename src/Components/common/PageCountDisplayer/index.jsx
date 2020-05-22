import React from 'react';
import PropTypes from 'prop-types';
import PageBlock from './PageBlock';

const PageCountDisplayer = ({ pageCount, activePageNumber }) => {
  const pageCountDisplayerArray = [];
  let i = 0;
  for (i = 0; i < pageCount; i += 1) {
    pageCountDisplayerArray.push(
      <PageBlock key={i + 1} pageNumber={i + 1} activePageNumber={activePageNumber} />
    );
  }
  return <div className="tc">{pageCountDisplayerArray}</div>;
};

PageCountDisplayer.propTypes = {
  pageCount: PropTypes.number.isRequired,
  activePageNumber: PropTypes.number.isRequired,
};

export default PageCountDisplayer;
