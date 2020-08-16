import React from 'react';
import Card from '@material/react-card';
import CategoryCard from './CategoryCard/CategoryCard';
import cardData from '../cardData';
import './HomePageCard.scss';

const TwoInOne = () => {
  return (
    <Card className="card-style">
      <div className="layout">
        {cardData.map((card) => {
          return (
            <CategoryCard
              key={card.id}
              title={card.title}
              subHead={card.subHead}
              topThree={card.topThree}
              logo={card.icon}
              props={card.props}
              cardLink={card.cardLink}
            />
          );
        })}
      </div>
    </Card>
  );
};
export default TwoInOne;
