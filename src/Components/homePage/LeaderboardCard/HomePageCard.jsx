import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import CategoryCard from './CategoryCard/CategoryCard';
import './HomePageCard.scss';

const HomePageCard = ({ topThree, titleImage, props, title, subHead, cardLink }) => (
  <Card className="card-style">
    <CategoryCard
      title={title}
      topThree={topThree}
      logo={titleImage}
      props={props}
      subHead={subHead}
      cardLink={cardLink}
    />
  </Card>
);
HomePageCard.propTypes = {
  topThree: PropTypes.array.isRequired,
  titleImage: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subHead: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired,
};
export default HomePageCard;
