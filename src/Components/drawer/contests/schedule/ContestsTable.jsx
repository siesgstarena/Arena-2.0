import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userColor, convertDate, convertTime } from '../../../../commonFunctions';

const ContestsTable = ({ contests }) => {
  // hidden variable is used to hide the licontestAdmin when the width
  // of the page goes below 900
  const hidden = window.innerWidth < 900;
  const rows = contests.map((contest) => {
    const startsAtDate = convertDate(contest.startsAt);
    const startsAtTime = convertTime(contest.startsAt);
    const endsAtDate = convertDate(contest.endsAt);
    const endsAtTime = convertTime(contest.endsAt);
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
          {startsAtTime}
        </td>
        <td>
          {endsAtDate}
          ,
          {endsAtTime}
        </td>
        <td><Link className="no-underline pointer dim black" to={`/contests/${contest.code}/scoreboard`}>{contest.moreDetails}</Link></td>
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
            <th>Duration</th>
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
