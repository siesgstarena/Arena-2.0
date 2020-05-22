import React, { useState, useEffect } from 'react';
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
  const [tab, setTab] = useState('submissions');
  useEffect(() => {
    // Added it because the window was automatically coming to the tab bar on mount
    window.scrollTo(0, 0);
  }, []);

  const toggleTab = (tabName) => {
    setTab(tabName);
    // This is done to remove pageNumber from the url so that it
    // doesn't conflict with the other tab when the tab is changed
    history.push({
      pathname: location.pathname,
      search: '',
    });
  };

  return (
    <div>
      <TabBar activeIndex={activeIndex} handleActiveIndexUpdate={handleActiveIndexUpdate}>
        <Tab
          onClick={() => {
            toggleTab('submissions');
          }}
        >
          <span className="mdc-tab__text-label">Submissions</span>
        </Tab>
        <Tab
          onClick={() => {
            toggleTab('posts');
          }}
        >
          <span className="mdc-tab__text-label">Posts</span>
        </Tab>
      </TabBar>
      {tab === 'submissions' ? <SubmissionsContainer user={user} /> : <Posts user={user} />}
    </div>
  );
};

ProfileTabBar.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProfileTabBar;
