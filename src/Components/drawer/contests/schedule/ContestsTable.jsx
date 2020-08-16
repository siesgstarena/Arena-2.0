import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  toDate,
  subMinutes,
  format,
  formatDistanceStrict,
  formatDistanceToNowStrict,
  isPast,
} from 'date-fns/esm';
import {
  userColor,
  // convertDate,
  // convertTime,
  // differenceInTwoDates,
  // adding330Minutes,
} from '../../../../commonFunctions';

const ContestsTable = ({ contests }) => {
  // hidden variable is used to hide the licontestAdmin when the width
  // of the page goes below 900
  const [width, setWidth] = useState(window.innerWidth);
  const hidden = width < 900;

  useEffect(() => {
    const updateWidthOnResize = () => {
      setWidth(window.innerWidth);
    };
    // Adding a resize event listener on mount
    window.addEventListener('resize', updateWidthOnResize);
    return () => {
      // Removing the listener when the component unmounts so that
      // no state updates happen when the component is unmounted
      window.removeEventListener('resize', updateWidthOnResize);
    };
  }, []);

  const rows = contests.map((contest) => {
    const startDate = Number(contest.startsAt);
    const endDate = Number(contest.endsAt);
    const startsAtDate = String(
      format(subMinutes(toDate(startDate), 330), 'EEE MMM d yyyy, hh:mm aa')
    );
    const lengthOfContest = String(formatDistanceStrict(endDate, startDate));
    const endsInDate = formatDistanceToNowStrict(endDate);

    // const currentDateObject = new Date();
    // let currentDateInMilliseconds = currentDateObject.getTime();
    // currentDateInMilliseconds = adding330Minutes(currentDateInMilliseconds);
    // const [length, lengthType] = differenceInTwoDates(contest.endsAt, contest.startsAt);
    // const [endsIn, endsInType] = differenceInTwoDates(currentDateInMilliseconds, contest.endsAt);
    return (
      <tr key={contest.code}>
        <td>
          <Link className="no-underline pointer dim blue" to={`/contests/${contest.code}`}>
            {contest.name}
          </Link>
        </td>
        {hidden ? (
          <td className="pa0" />
        ) : (
          <td>
            {contest.contestAdmin.map((setter) => (
              <Link
                className="no-underline pointer"
                to={`/profile/${setter._id}`}
                style={{ color: userColor(setter.ratings, setter._id) }}
                key={setter._id}
              >
                <div className="ma1 dim">{setter.name}</div>
              </Link>
            ))}
          </td>
        )}
        <td>{startsAtDate}</td>
        <td>{lengthOfContest}</td>
        {isPast(endDate) ? (
          // currentDateInMilliseconds > contest.endsAt ? (
          <td>
            <Link
              className="no-underline pointer dim blue"
              to={`/contests/${contest.code}/scoreboard`}
            >
              Scoreboard
            </Link>
          </td>
        ) : (
          <td>
            Ends in &nbsp;
            {endsInDate}
          </td>
        )}
      </tr>
    );
  });

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th>Contest name</th>
            {hidden ? <th className="pa0" /> : <th>Setter</th>}
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
