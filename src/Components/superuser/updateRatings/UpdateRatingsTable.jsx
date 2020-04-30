import React from 'react';
import Table from '../../common/Table/index';
import UpdateRatingsTableData from './UpdateRatingsTableData';
import ratings from '../../drawer/ratings/ratings';

const RatingsTable = () => {
  const tableHeadings = ['Name', 'New Ratings', 'Manual Rating'];

  const ratingsArray = ratings.map(
    user => <UpdateRatingsTableData key={user.rank} user={user} />,
  );

  return (
    <Table tableHeadings={tableHeadings} tableData={ratingsArray} tableHeadingClassName="tc" />
  );
};

export default RatingsTable;
