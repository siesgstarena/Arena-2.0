import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  userColor, convertDate, convertTime, differenceInTwoDates,
} from '../../../../commonFunctions';

const ContestsTable = ({ contests }) => {
  // hidden variable is used to hide the licontestAdmin when the width
  // of the page goes below 900
  const hidden = window.innerWidth < 900;
  const rows = contests.map((contest) => {
    const startsAtDate = convertDate(contest.startsAt);
    const startsAtTime = convertTime(contest.startsAt);
    const [length, lengthType] = differenceInTwoDates(contest.endsAt, contest.startsAt, 1);
    return (
      <tr key={contest.code}>
        <td>
          <Link
            className="no-underline pointer dim black"
            to={`/contests/${contest.code}`}
          >
            {contest.name}
          </Link>
        </td>
        {
          hidden
            ? <td className="pa0" />
            : (
              <td>
                {
                  contest.contestAdmin.map(setter => (
                    <Link
                      className="no-underline pointer"
                      to={`/profile/${setter._id}`}
                      style={{ color: userColor(setter.ratings) }}
                      key={setter._id}
                    >
                      <div className="ma1 dim">
                        {setter.name}
                      </div>
                    </Link>
                  ))
                }
              </td>
            )
        }
        <td>
          {startsAtDate}
          ,
          &nbsp;
          {startsAtTime}
        </td>
        <td>
          {length}
          &nbsp;
          {lengthType}
        </td>
        <td><Link className="no-underline pointer dim black" to={`/contests/${contest.code}/scoreboard`}>Scoreboard</Link></td>
      </tr>
    );
  });

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th>Contest name</th>
            {
              hidden
                ? <th className="pa0" />
                : <th>Setter</th>
            }
            <th>Start</th>
            <th>Length</th>
            <th>More details</th>
          </tr>
          {rows}
        </tbody>
      </table>
    </div>
  );
};

ContestsTable.propTypes = {
  contests: PropTypes.array.isRequired,
};

export default ContestsTable;
