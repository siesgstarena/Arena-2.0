import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Table from '../../../common/Table/index';
import { userColor } from '../../../../commonFunctions';

const RatingChangesTable = ({ ratingChanges }) => {
  const tableHeadings = ['#', 'Who', 'Δ', 'Rating'];
  // console.log(ratingChanges);
  const ratingChangesArray = ratingChanges.map((change, index) => {
    let changeColor = '#000000';
    let oldRating = 1200;
    if (change.oldRating) {
      oldRating = change.oldRating.newRating;
    }
    const { newRating } = change.newRatings;
    const user = change.user[0];
    const delta = newRating - oldRating;
    // console.log(oldRating);
    if (delta > 0) {
      changeColor = 'green';
    } else if (delta < 0) {
      changeColor = 'red';
    }
    return (
      <tr key={user._id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">{index + 1}</td>
        <td className="tc pa3">
          <Link
            to={`/profile/${user._id}`}
            style={{ color: userColor(user.ratings, user._id) }}
            className="no-underline"
          >
            {user.username}
          </Link>
        </td>
        <td className="pa3 tc" style={{ color: changeColor }}>
          {delta}
        </td>
        <td className="tc pa3">
          {change.oldRating ? (
            <>
              <span style={{ color: userColor(oldRating, change.user._id) }}>{oldRating}</span>
              &nbsp; -&gt; &nbsp;
            </>
          ) : null}
          <span style={{ color: userColor(newRating, change.user._id) }}>{newRating}</span>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <Table
        tableHeadings={tableHeadings}
        tableData={ratingChangesArray}
        tableHeadingClassName="tc"
      />
    </div>
  );
};

RatingChangesTable.propTypes = {
  ratingChanges: PropTypes.array.isRequired,
};

export default RatingChangesTable;
