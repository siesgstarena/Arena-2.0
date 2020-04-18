import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Table from '../../common/Table/index';
import { userColor } from '../../../commonFunctions';

const RatingsTable = ({ users, activePageNumber, limit }) => {
  const tableHeadings = ['#', 'Name', 'Ratings'];
  const ratingsArray = users.map((user, index) => {
    const colorOfTheUser = userColor(user.ratings);
    return (
      <tr key={user._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          {((activePageNumber - 1) * limit) + index + 1}
        </td>
        <td className="tc pa3">
          <Link className="no-underline dim pointer" style={{ color: colorOfTheUser }} to={`/profile/${user._id}`}>
            {user.name}
          </Link>
        </td>
        <td className="tc pa3">
          {user.ratings}
        </td>
      </tr>
    );
  });

  return (
    <Table tableHeadings={tableHeadings} tableData={ratingsArray} tableHeadingClassName="tc" />
  );
};

RatingsTable.propTypes = {
  users: PropTypes.array.isRequired,
  activePageNumber: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default RatingsTable;
