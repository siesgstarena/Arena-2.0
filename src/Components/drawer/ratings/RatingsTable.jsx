import React from 'react';
import { Link } from 'react-router-dom';
import ratings from './ratings';

const RatingsTable = () => {
  const ratingsArray = ratings.map(user => (
    <tr key={user.rank} style={{ fontSize: '.9em' }}>
      <td className="tc pa3">
        {user.rank}
      </td>
      <td className="tc pa3">
        <Link className="no-underline black" to={`/profile/${user.profileId}`}>
          {user.name}
        </Link>
      </td>
      <td className="tc pa3">
        {user.rating}
      </td>
    </tr>
  ));

  return (
    <div className="" style={{ overflowX: 'auto' }}>
      <table className="">
        <tbody className="">
          <tr className="">
            <th className="tc">#</th>
            <th className="tc">Name</th>
            <th className="tc">Ratings</th>
          </tr>
          {ratingsArray}
        </tbody>
      </table>
    </div>
  );
};

export default RatingsTable;
