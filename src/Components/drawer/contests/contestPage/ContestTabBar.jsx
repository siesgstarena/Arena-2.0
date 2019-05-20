import React, { useState } from 'react';
import Tab from '@material/react-tab';
import PropTypes from 'prop-types';
import TabBar from '@material/react-tab-bar';

const ContestTabBar = ({ props }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexUpdate = (updatedActiveIndex) => {
    setActiveIndex(updatedActiveIndex);
  };
  const { history } = props;
  const { location } = props;
  const { pathname } = location;
  const onTabClick = (path) => {
    history.push(path);
  };
  return (
    <div className="ma1">
      <TabBar
        className=""
        activeIndex={activeIndex}
        handleActiveIndexUpdate={handleActiveIndexUpdate}
      >
        <Tab onClick={() => onTabClick(`${pathname}`)}>
          <span className="mdc-tab__text-label">Dashboard</span>
        </Tab>
        <Tab onClick={() => onTabClick(`${pathname}/status`)}>
          <span className="mdc-tab__text-label">Status</span>
        </Tab>
        <Tab onClick={() => onTabClick(`${pathname}/my`)}>
          <span className="mdc-tab__text-label">My Submissions</span>
        </Tab>
        <Tab onClick={() => onTabClick(`${pathname}/scoreboard`)}>
          <span className="mdc-tab__text-label">Scoreboard</span>
        </Tab>
        <Tab onClick={() => onTabClick(`${pathname}/submit`)}>
          <span className="mdc-tab__text-label">Submit</span>
        </Tab>
      </TabBar>
    </div>
  );
};

ContestTabBar.propTypes = {
  location: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default ContestTabBar;
