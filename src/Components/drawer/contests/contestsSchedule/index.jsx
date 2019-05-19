/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Headline6, Headline4 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import { currentContests, pastContests } from './contests';
import './index.scss';
import 'tachyons';

const ContestsScehdule = () => {
  // hidden variable is used to hide the list of setters when the width
  // of the page goes below 900
  const hidden = window.innerWidth < 900;
  // currentContestArray is the array of all the rows in the
  // the table of current contests
  const currentContestsArray = currentContests.map(contest => (
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
  const pastContestsArray = pastContests.map(contest => (
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

  return (
    <div className="pa2 mw8-ns center">
      <Headline4 className="purple mt2">Contests</Headline4>
      <Headline6 className="purple mb2 mt1">Ongoing Contests</Headline6>
      <div className="shadow-4 rounded-corners" style={{ overflowX: 'auto' }}>
        <table className="">
          <tbody className="">
            <tr className="white bg-black">
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
            {currentContestsArray}
          </tbody>
        </table>
      </div>
      <Headline6 className="purple mb2">Past Contests</Headline6>
      <div className="shadow-4 rounded-corners" style={{ overflowX: 'auto' }}>
        <table>
          <tbody className="">
            <tr className="white bg-black">
              <th>Contest name</th>
              {
                hidden
                  ? <td className="pa0" />
                  : <th>Setter</th>
              }
              <th>Start</th>
              <th>Duration</th>
              <th>More details</th>
            </tr>
            {pastContestsArray}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default ContestsScehdule;
