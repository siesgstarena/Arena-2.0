import React from 'react';
import PropTypes from 'prop-types';
import { Headline6, Headline5, Body2 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import './CategoryCard.scss';

const CategoryCard = ({ logo, title, subHead, cardLink, props, topThree }) => (
  <div className="lbCard">
    <div className="lbCard-header">
      <img alt="icon" className="b--transparent ba br-100 shadow-1" src={logo} height="75vh" />
      <div className="ml2">
        <Headline5 className="ma0 purple">{title}</Headline5>
        <span className="mid-gray">{subHead}</span>
      </div>
    </div>
    <div className="lbCard-content">
      {topThree.map((dev) => (
        <div className="lbCard-content-each" key={dev.id}>
          <Link to={`/profile/${dev.id}`} className="no-underline black">
            <Headline6 style={{ lineHeight: '1.5rem' }} className="ma0 flex">
              {dev.name}
            </Headline6>
          </Link>
          <Body2 className="ma0 ml2 pointer black">({dev[props]})</Body2>
        </div>
      ))}
    </div>
    <Link to={cardLink} className="no-underline pointer tc">
      <Headline6 className="ma0 purple">View More</Headline6>
    </Link>
  </div>
);

CategoryCard.propTypes = {
  topThree: PropTypes.array.isRequired,
  logo: PropTypes.string.isRequired,
  props: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subHead: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired,
};

export default CategoryCard;
