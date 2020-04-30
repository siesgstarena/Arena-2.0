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
    const splittedSearchString = location.search.split('pageNumber=');
    let searchString = splittedSearchString[0];
    // if pageNumber is already present in the search query then
    // when user clicks on the page block we just update the pageNumber
    // and keep the original query as it is
    if (location.search.includes('pageNumber')) {
      searchString += `pageNumber=${pageNumber}`;
    } else {
      searchString += `&pageNumber=${pageNumber}`;
    }
    history.push({
      pathname: location.pathname,
      search: searchString,
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
