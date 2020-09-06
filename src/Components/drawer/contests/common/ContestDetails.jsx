import React from 'react';
import Card from '@material/react-card';
import { Body1, Body2, Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import isBefore from 'date-fns/isBefore';
import CountDownTimer from './CountDownTimer';
import 'tachyons';

const ContestDetails = ({ name, description, endsAt, startsAt }) => {
  return (
    <Card className="pa2 tc">
      <Body1 className="mb0">{name}</Body1>
      <Body2 className="mid-gray">{description}</Body2>
      <hr className="ml3 mr3" />
      <Headline4 className="mt2 mb2 mid-gray">
        {isBefore(new Date(), new Date(Number(startsAt))) ? (
          // if the contest has not been started yet
          <CountDownTimer countDownTill={startsAt} />
        ) : (
          // if the contest has already been started
          <CountDownTimer countDownTill={endsAt} />
        )}
      </Headline4>
    </Card>
  );
};

ContestDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  endsAt: PropTypes.string.isRequired,
  startsAt: PropTypes.string.isRequired,
};

export default ContestDetails;
