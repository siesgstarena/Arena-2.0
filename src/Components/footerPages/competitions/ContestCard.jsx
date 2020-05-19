import React from 'react';
import Card, { CardMedia } from '@material/react-card';
import PropTypes from 'prop-types';
import { Body1, Body2 } from '@material/react-typography';
import 'tachyons';

const ContestCard = ({ contestImage, contestName, contestDetails, contestDate }) => (
  <Card className="">
    <CardMedia square imageUrl={contestImage} />
    <div className="pl3 pr3">
      <Body1 style={{ fontWeight: 600 }}>{contestName}</Body1>
      <Body1 className="mid-gray">{contestDetails}</Body1>
      <Body2 className="mid-gray">{contestDate}</Body2>
    </div>
  </Card>
);

ContestCard.propTypes = {
  contestName: PropTypes.string.isRequired,
  contestImage: PropTypes.string.isRequired,
  contestDetails: PropTypes.string.isRequired,
  contestDate: PropTypes.string.isRequired,
};

export default ContestCard;
