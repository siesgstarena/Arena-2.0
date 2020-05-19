import React from 'react';
import Card, { CardMedia } from '@material/react-card';
import PropTypes from 'prop-types';
import { Body1 } from '@material/react-typography';
import 'tachyons';

const GoodiesCard = ({ goodiesImage, goodiesName }) => (
  <Card className="">
    <CardMedia square imageUrl={goodiesImage} />
    <div className="pl3 pr3">
      <Body1 className="tc">{goodiesName}</Body1>
    </div>
  </Card>
);

GoodiesCard.propTypes = {
  goodiesImage: PropTypes.string.isRequired,
  goodiesName: PropTypes.string.isRequired,
};

export default GoodiesCard;
