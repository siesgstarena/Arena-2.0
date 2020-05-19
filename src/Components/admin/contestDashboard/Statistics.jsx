import React from 'react';
import PropTypes from 'prop-types';
import { Headline6, Body2 } from '@material/react-typography';

const Statistics = ({ stats }) => (
  <div className="ba br4 b--black-20 pa2 mt4">
    <Headline6 className="mid-gray ma0 tc">Statistics</Headline6>
    <div
      className="tc mt2"
      style={{
        height: '150px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <div style={{ fontSize: '35px' }}>{stats.usersCount}</div>
        <Body2 className="red">Users</Body2>
      </div>
      <div>
        <span style={{ fontSize: '35px' }}>{stats.acceptedCount}</span>
        <Body2 className="green">Accepted</Body2>
      </div>
      <div className="">
        <span style={{ fontSize: '35px' }}>{stats.totalCount}</span>
        <Body2 className="blue">Submissions</Body2>
      </div>
    </div>
  </div>
);

Statistics.propTypes = {
  stats: PropTypes.object.isRequired,
};

export default React.memo(Statistics);
