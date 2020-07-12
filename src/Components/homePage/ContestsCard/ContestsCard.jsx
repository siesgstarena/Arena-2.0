import React from 'react';
import Card from '@material/react-card';
import PropTypes from 'prop-types';
import { Headline6 } from '@material/react-typography';
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
  const { contestImage } = contestDetails;
  return (
    <Link to="/contests/SRM14" className="no-underline black pointer">
      <Card className="mt0 pa1" style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee' }}>
        <div className="contest">
          <div className="contest-header">
            <Headline6 className="ma0">Upcoming / Live Contest</Headline6>
          </div>
          <img className="contest-image" alt="icon" src={contestImage} />
          {/* </div> */}
        </div>
      </Card>
    </Link>
  );
};

ContestsCard.propTypes = {
  contestDetails: PropTypes.object,
};

export default ContestsCard;
