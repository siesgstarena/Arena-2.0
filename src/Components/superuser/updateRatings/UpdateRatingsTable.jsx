import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../common/Table/index';
import UpdateRatingsTableData from './UpdateRatingsTableData';

const RatingsTable = ({ ratingsData }) => {
  const tableHeadings = ['Name', 'New Ratings', 'Manual Rating'];

  const ratingsArray = ratingsData.map(
    ratingData => <UpdateRatingsTableData key={ratingData.user._id} ratingData={ratingData} />,
  );

  return (
    <Table tableHeadings={tableHeadings} tableData={ratingsArray} tableHeadingClassName="tc" />
  );
};

RatingsTable.propTypes = {
  ratingsData: PropTypes.array.isRequired,
};

export default RatingsTable;
