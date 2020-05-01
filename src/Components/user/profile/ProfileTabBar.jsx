import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TabBar from '@material/react-tab-bar';
import Tab from '@material/react-tab';
import Submissions from './Submissions';
import Posts from './Posts';

const ProfileTabBar = ({
  blogPages, submissionPages, blogs, submissions,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexUpdate = (updatedActiveIndex) => {
    setActiveIndex(updatedActiveIndex);
  };
  const [initialClass, setClass] = useState('db');

  const toggleClass = newClass => (setClass(newClass));

  return (
    <div>
      <TabBar
        activeIndex={activeIndex}
        handleActiveIndexUpdate={handleActiveIndexUpdate}
      >
        <Tab onClick={() => { toggleClass('db'); }}>
          <span className="mdc-tab__text-label">Submissions</span>
        </Tab>
        <Tab onClick={() => { toggleClass('dn'); }}>
          <span className="mdc-tab__text-label">Posts</span>
        </Tab>
      </TabBar>
      {
        (initialClass === 'db') ? <Submissions submissions={submissions} submissionPages={submissionPages} /> : <Posts blogPages={blogPages} blogs={blogs} />
      }

    </div>
  );
};

ProfileTabBar.propTypes = {
  blogPages: PropTypes.number.isRequired,
  blogs: PropTypes.array.isRequired,
  submissionPages: PropTypes.number.isRequired,
  submissions: PropTypes.array.isRequired,
};

export default ProfileTabBar;
