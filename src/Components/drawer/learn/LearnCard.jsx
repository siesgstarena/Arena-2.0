import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import { Headline6, Body1 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import './styles.scss';

const EachCard = ({ subCategory, title }) => (
  <Card className="learn-card-each">
    <Headline6 className="learn-card-each-title">{title}</Headline6>
    {subCategory.map((eachItem) => (
      <Link key={eachItem.title} to={eachItem.link} className="learn-card-each-link">
        <Body1 className="ma0">{eachItem.title}</Body1>
      </Link>
    ))}
  </Card>
);

EachCard.propTypes = {
  subCategory: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

const LearnCard = ({ eachCategory }) => {
  return (
    <Card className="learn-card">
      <div className="learn-card-container">
        <EachCard subCategory={eachCategory.blogs} title="Resources" />
        <EachCard subCategory={eachCategory.problems} title="Problems" />
      </div>
      <Card className="learn-card-tips">
        <Headline6 className="learn-card-each-title tc">Suggestions</Headline6>
        <ul style={{ padding: '0em 1em', margin: '0' }}>
          <Body1>
            {eachCategory.suggestions.map((sugg) => (
              <li key={sugg} className="learn-card-each-tip">
                {sugg}
              </li>
            ))}
          </Body1>
        </ul>
      </Card>
    </Card>
  );
};

LearnCard.propTypes = {
  eachCategory: PropTypes.object.isRequired,
};

export default LearnCard;
