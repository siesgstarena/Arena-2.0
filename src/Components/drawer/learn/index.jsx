import React from 'react';
import { Headline4, Body1 } from '@material/react-typography';
import info from './info';
import './styles.scss';
import LearnCard from './LearnCard';

const LearnContainer = () => {
  return (
    <div className="learn-container">
      <Headline4 className="ma2 purple learn-title">Learn</Headline4>
      <Body1 className="ma0 learn-description">
        Resources listed are curated by our team of problem setters and testers, specially for all
        learners at SIESGST. Resources listed, are within the SIESGSTarena site and external
        resources will be mentioned soon. Anyone can go through these resources and suggest changes
        to our Team, if any needed.
      </Body1>
      <div className="learn-card-container">
        {info.map((each) => (
          <LearnCard each={each} key={each.category} />
        ))}
      </div>
    </div>
  );
};

export default LearnContainer;
