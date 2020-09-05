import React, { useState, useEffect } from 'react';
import TabBar from '@material/react-tab-bar';
import Tab from '@material/react-tab';
import { Headline4, Body1 } from '@material/react-typography';
import info from './info';
import './styles.scss';
import LearnCard from './LearnCard';

const LearnContainer = () => {
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
  };
  const renderIndex = (tabName) => {
    switch (tabName) {
      case 'beginner':
        return 0;
      case 'intermediate':
        return 1;
      case 'advanced':
        return 2;
      case 'expert':
        return 3;
      default:
        return 0;
    }
  };
  const renderItem = renderIndex(tab);
  return (
    <div className="learn-container">
      <Headline4 className="ma2 purple learn-title">Learn</Headline4>
      <Body1 className="ma0 learn-description">
        Resources listed are curated by our team of problem setters and testers, specially for all
        learners at SIESGST. Resources listed, are within the SIESGSTarena site and external
        resources will be mentioned soon. Anyone can go through these resources and suggest changes
        to our Team, if any needed.
      </Body1>
      <TabBar activeIndex={activeIndex} handleActiveIndexUpdate={handleActiveIndexUpdate}>
        <Tab
          onClick={() => {
            toggleTab('beginner');
          }}
        >
          <span className="mdc-tab__text-label">Beginner</span>
        </Tab>
        <Tab
          onClick={() => {
            toggleTab('intermediate');
          }}
        >
          <span className="mdc-tab__text-label">Intermediate</span>
        </Tab>
        <Tab
          onClick={() => {
            toggleTab('advanced');
          }}
        >
          <span className="mdc-tab__text-label">Advanced</span>
        </Tab>
        <Tab
          onClick={() => {
            toggleTab('expert');
          }}
        >
          <span className="mdc-tab__text-label">Expert</span>
        </Tab>
      </TabBar>
      <LearnCard eachCategory={info[renderItem]} key={info[renderItem].category} />
    </div>
  );
};

export default LearnContainer;
