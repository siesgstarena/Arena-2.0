import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import TabBar from '@material/react-tab-bar';
import Tab from '@material/react-tab';
import SubmissionsContainer from './SubmissionsContainer';
import Posts from './Posts';

const ProfileTabBar = ({ user }) => {
  const location = useLocation();
  const history = useHistory();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexUpdate = (updatedActiveIndex) => {
    setActiveIndex(updatedActiveIndex);
  };
  const [initialClass, setClass] = useState('db');

  const toggleClass = newClass => (setClass(newClass));

  const toggleTab = (className) => {
    toggleClass(className);
    history.push({
      pathname: location.pathname,
      search: '',
    });
  };

  return (
    <div>
      <TabBar
        activeIndex={activeIndex}
        handleActiveIndexUpdate={handleActiveIndexUpdate}
      >
        <Tab onClick={() => { toggleTab('db'); }}>
          <span className="mdc-tab__text-label">Submissions</span>
        </Tab>
        <Tab onClick={() => { toggleTab('dn'); }}>
          <span className="mdc-tab__text-label">Posts</span>
        </Tab>
      </TabBar>
      {
        (initialClass === 'db') ? <SubmissionsContainer /> : <Posts user={user} />
      }

    </div>
  );
};

ProfileTabBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileTabBar;
