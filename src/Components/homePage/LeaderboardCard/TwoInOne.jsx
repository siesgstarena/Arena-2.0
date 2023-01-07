import React from 'react';
import Card from '@material/react-card';
import CategoryCard from './CategoryCard/CategoryCard';
// import cardData from '../cardData';
import './HomePageCard.scss';
import useHomePage from '../../../customHooks/useHomePage';
import Spinner from '../../common/Spinner';
import SomethingWentWrong from '../../common/SomethingWentWrong';

const TwoInOne = () => {
  const { cardData, loading, error } = useHomePage();
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  return (
    <Card className="card-style">
      <div className="layout">
        {cardData &&
          cardData.map((card) => {
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
