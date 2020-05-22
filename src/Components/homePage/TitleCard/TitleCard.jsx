import React from 'react';
import { Headline5 } from '@material/react-typography';
import './TitleCard.css';


const TitleCard = () => {
  const welcomeMessage = 'Welcome to SIESGSTarena!';
  return (
    <div className="pa2 codebox">
      <Headline5 className="line-1 anim-typewriter ma0">{welcomeMessage}</Headline5>
    </div>
  );
};

export default TitleCard;
