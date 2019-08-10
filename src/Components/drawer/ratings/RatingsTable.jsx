import React from 'react';
import { Link } from 'react-router-dom';
import Table from '../../common/Table/index';
import ratings from './ratings';

const RatingsTable = () => {
  const tableHeadings = ['#', 'Name', 'Ratings'];
  const ratingsArray = ratings.map(user => (
    <tr key={user.rank} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        {user.rank}
      </td>
      <td className="tc pa3">
        <Link className="no-underline dim blue pointer" to={`/profile/${user.profileId}`}>
          {user.name}
        </Link>
      </td>
      <td className="tc pa3">
        {user.rating}
      </td>
    </tr>
  ));

  return (
    <Table tableHeadings={tableHeadings} tableData={ratingsArray} tableHeadingClassName="tc" />
  );
};

export default RatingsTable;
