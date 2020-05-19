import React from 'react';
import PropTypes from 'prop-types';
import Table from '../../common/Table/index';
import UpdateRatingsTableData from './UpdateRatingsTableData';

const RatingsTable = ({ ratingsData, setUpdatedRatings }) => {
  const tableHeadings = ['Name', 'New Ratings', 'Manual Rating'];

  const ratingsArray = ratingsData.map((ratingData) => (
    <UpdateRatingsTableData
      key={ratingData.user._id}
      setUpdatedRatings={setUpdatedRatings}
      ratingData={ratingData}
    />
  ));

  return (
    <Table tableHeadings={tableHeadings} tableData={ratingsArray} tableHeadingClassName="tc" />
  );
};

RatingsTable.propTypes = {
  ratingsData: PropTypes.array.isRequired,
  setUpdatedRatings: PropTypes.func.isRequired,
};

export default RatingsTable;
