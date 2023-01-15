import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Card from '@material/react-card';
import { Headline6, Body1 } from '@material/react-typography';
import { Link } from 'react-router-dom';

const EachCard = ({ subCategory, title }) => (
  <Card className="learn-card-each">
    <Headline6 className="learn-card-each-title">{title}</Headline6>
    {subCategory.map((eachItem) => (
      <Link
        key={eachItem.title}
        to={{
          pathname: eachItem.link,
        }}
        target="_blank"
        className="learn-card-each-link"
      >
        <Body1 className="ma0">{eachItem.title}</Body1>
      </Link>
    ))}
  </Card>
);

EachCard.propTypes = {
  subCategory: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default EachCard;
