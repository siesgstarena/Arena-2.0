import React from 'react';
import { Headline5 } from '@material/react-typography';
import Card from '@material/react-card';
import './PosterCard.css';

// const GoArrow = () => (
//     <span className="go-arrow">→</span>
// );

const PosterCard = () => {
  return (
    <Card
      className="center ma0 card"
      style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee', borderRadius: '10px' }}
    >
      <div className="flex flex-column">
        <div className="card-container learn">
          <Headline5 className="card-title">Learn</Headline5>
        </div>
        <div className="card-container compete">
          <Headline5 className="card-title">Compete</Headline5>
        </div>
        <div className="card-container work">
          <Headline5 className="card-title">Work</Headline5>
        </div>
      </div>
    </Card>
  );
};
export default PosterCard;
