import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../../common/Table/index';
import {
  userColor,
} from '../../../../commonFunctions';

const RatingsChangeTable = ({ ratingsChange }) => {
  const tableHeadings = ['#', 'Who', 'Δ', 'Rating'];
  const problemsubmissionArray = ratingsChange.map((change, index) => {
    let changeColor = '#000000';
    const delta = change._id.newRating - change.oldRating.newRating;
    if (delta > 0) {
      changeColor = 'green';
    } else if (delta < 0) {
      changeColor = 'red';
    }
    return (
      <tr key={change.user._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          {index + 1}
        </td>
        <td className="tc pa3" style={{ color: userColor(change.user.ratings, change.user._id) }}>
          <Link to={`profile/${change.user._id}`} className="no-underline">
            {change.user.username}
          </Link>
        </td>
        <td className="pa3 tc" style={{ color: changeColor }}>
          {delta}
        </td>
        <td className="tc pa3">
          <span style={{ color: userColor(change._id.newRating, change.user._id) }}>
            {change._id.newRating}
          </span>
          &nbsp;
          -&gt;
          &nbsp;
          <span style={{ color: userColor(change.oldRating.newRating, change.user._id) }}>
            {change.oldRating.newRating}
          </span>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table tableHeadings={tableHeadings} tableData={problemsubmissionArray} tableHeadingClassName="tc" />
    </div>
  );
};

RatingsChangeTable.propTypes = {
  ratingsChange: PropTypes.array.isRequired,
};

export default RatingsChangeTable;
