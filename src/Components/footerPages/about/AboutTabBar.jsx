import React, { useState } from 'react';
import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';
import { Subtitle1, Headline5 } from '@material/react-typography';
import OurMission from './OurMissionCard';
import MessageCardGrid from './MessageCardGrid';
import FounderCard from './FounderCard';
import './AboutTabBar.scss';

const AboutTabBar = () => {
  // If activeIndex = 0 then the user is on About Tab
  // If activeIndex = 0 then the user is on Our Story Tab
  const [activeIndex, setActiveIndex] = useState(0);
  // The following function changes the tabs
  const handleActiveIndexUpdate = (newActiveIndex) => {
    setActiveIndex(newActiveIndex);
  };
  return (
    <div>
      <TabBar
        className="react-tab-bar-alternate"
        activeIndex={activeIndex}
        handleActiveIndexUpdate={handleActiveIndexUpdate}
      >
        <Tab>
          <span className="mdc-tab__text-label">About</span>
        </Tab>
        <Tab>
          <span className="mdc-tab__text-label">Our Story</span>
        </Tab>
      </TabBar>
      {activeIndex === 0 ? (
        <div>
          {/* The following contents will be rendered when the user is on About Tab */}
          <OurMission />
          <Subtitle1 className="center mw8-l mw7-m pa2">
            SIESGSTarena is the name of the CodeChef SIESGST Campus Chapter and an online platform
            for conducting programming competitions.
          </Subtitle1>
          <MessageCardGrid />
        </div>
      ) : (
        <div>
          {/* The following contents will be rendered when the user is on Our Story Tab */}
          <Headline5 className="center purple pa1 mw6">
            From college classrooms to World Wide Web
          </Headline5>
          <FounderCard />
        </div>
      )}
    </div>
  );
};

export default AboutTabBar;
