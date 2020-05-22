import React from 'react';
import Card from '@material/react-card';
import { Body1, Body2, Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import CountDownTimer from './CountDownTimer';
import 'tachyons';

// const [timeStamp, setTimeStamp] = useState(new Date());
// const [extractedDate, setExtractedDate] = useState(timeStamp.toLocaleTimeString());

// useEffect(() => {
//   setTimeStamp(new Date());
//   setExtractedDate(timeStamp.toLocaleTimeString());
// }, [timeStamp]);

const ContestDetails = ({ name, description, endsAt }) => (
  <Card className="pa2 tc">
    <Body1 className="mb0">{name}</Body1>
    <Body2 className="mid-gray">{description}</Body2>
    <hr className="ml3 mr3" />
    <Headline4 className="mt2 mb2 mid-gray">
      <CountDownTimer countDownTill={endsAt} />
    </Headline4>
  </Card>
);

ContestDetails.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  endsAt: PropTypes.string.isRequired,
};

export default ContestDetails;
