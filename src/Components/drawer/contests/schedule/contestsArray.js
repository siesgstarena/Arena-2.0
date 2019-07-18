/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { currentContests, pastContests } from './contests';

// hidden variable is used to hide the list of setters when the width
// of the page goes below 900
const hidden = window.innerWidth < 900;
// currentContestArray is the array of all the rows in the
// the table of current contests
export const currentContestsArray = currentContests.map(contest => (
  <tr key={contest.id}>
    <td>
      <Link
        className="no-underline pointer dim black"
        to={`/contests/${contest.id}`}
      >
        {contest.contestName}
      </Link>
    </td>
    { hidden
      ? <td className="pa0" />
      : (
        <td>
          {
            contest.setters.map((setter, index) => (
              <div className="ma1" key={index}>{setter}</div>
            ))
          }
        </td>
      )
    }
    <td>{contest.start}</td>
    <td>{contest.duration}</td>
    <td>{contest.moreDetails}</td>
  </tr>
));

// pastContestArray is the array of all the rows in the
// table of past competitions
export const pastContestsArray = pastContests.map(contest => (
  <tr key={contest.id}>
    <td>
      <Link
        className="no-underline pointer dim black"
        to={`/contests/${contest.id}`}
      >
        {contest.contestName}
      </Link>
    </td>
    {
      hidden
        ? <td className="pa0" />
        : (
          <td>
            {
              contest.setters.map((setter, index) => (
                <div className="ma1" key={index}>{setter}</div>
              ))
            }
          </td>
        )
    }
    <td>{contest.start}</td>
    <td>{contest.duration}</td>
    <td><Link className="no-underline pointer dim black" to={`/contests/${contest.id}/scoreboard`}>{contest.moreDetails}</Link></td>
  </tr>
));
