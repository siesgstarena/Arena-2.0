import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import { Headline6, Headline5 } from '@material/react-typography';
import { Link } from 'react-router-dom';
// import contest from './assets/SRM14.jpg';
import './ContestsCard.scss';

const contestInfo = [
  {
    contestName: 'SRM 14',
    setter: ['Shambhavi'],
    date: '27 May, 2020',
    time: '7pm IST',
    contestImage:
      'https://res.cloudinary.com/dh6iqxujx/image/upload/v1590592954/Arena/SRM14_s3uvgk.jpg',
  },
];

const ContestsCard = ({ contestDetails = contestInfo[0] }) => {
  const { contestName, setter, date, time, contestImage } = contestDetails;
  return (
    <Link to="/contests/SRM14" className="no-underline black pointer">
      <Card className="ma0 pa0" style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee' }}>
        <div className="contest">
          <div>
            <img className="contest-image" alt="icon" src={contestImage} />
          </div>
          <div className="contest-content">
            <Headline6 className="contest-content-live">Live Now</Headline6>
            <Headline5 className="contest-content-title">{contestName}</Headline5>
            <span>Setter(s): {setter[0]}</span>
            <span>{`${date} at ${time}`}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

ContestsCard.propTypes = {
  contestDetails: PropTypes.object,
};

export default ContestsCard;
