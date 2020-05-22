import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import { Headline6, Headline5, Body2 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import './HomePageCard.css';

const HomePageCard = ({ topThree, titleImage, props, title, subHead, cardLink }) => (
  <Card
    className="center ma0 pa2"
    style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee', borderRadius: '10px' }}
  >
    <div className="cardHead center items-center mb2 pa3 pt3">
      <img
        alt="icon"
        className="b--transparent ba br-100 shadow-1"
        src={titleImage}
        height="75vh"
      />
      <div className="ml2">
        <Headline5 className="ma0 purple">{title}</Headline5>
        <span className="mid-gray">{subHead}</span>
      </div>
    </div>
    <div className="pa2 pb4 center">
      {topThree.map((dev, index) => (
        <div className="mb3 mt3 flex items-center justify-between" key={dev.id}>
          <Link to={`/profile/${dev.id}`} className="no-underline black">
            <Headline6 style={{ lineHeight: '1.5rem' }} className="ma0 flex">
              <span>{index + 1}.</span>
              {dev.name}
            </Headline6>
          </Link>
          <Body2 className="ma0 ml2 pointer black">({dev[props]})</Body2>
        </div>
      ))}
    </div>
    <Link to={cardLink} className="no-underline pointer center">
      <Headline6 className="ma0 purple">View More</Headline6>
    </Link>
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
