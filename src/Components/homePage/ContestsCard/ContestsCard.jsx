import React, { useContext } from 'react';
import Card from '@material/react-card';
import { Headline6 } from '@material/react-typography';
import { Link } from 'react-router-dom';
// import contest from './assets/SRM14.jpg';
import './ContestsCard.scss';
import SomethingWentWrong from '../../common/SomethingWentWrong';
import HomePage from '../../../Contexts/HomePage';

const contestInfo = [
  {
    contestName: 'SRM 14',
    setter: ['Shambhavi'],
    date: '27 May, 2020',
    title: 'Current/Upcoming Contest',
    link: '/contests/CDEV',
    imageUrl: 'https://i.imgur.com/JHIyoGtm.png',
  },
];

const ContestsCard = () => {
  // eslint-disable-next-line prefer-const
  let { AnnouncementError: error, AnnouncementData: data } = useContext(HomePage);
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  // eslint-disable-next-line prefer-destructuring
  if (!data.getCurrentAnnouncement) data = contestInfo[0];
  else data = data.getCurrentAnnouncement;
  return (
    <Link to={data.link} className="no-underline black pointer">
      <Card className="contest-card">
        <div className="contest">
          <div className="contest-header">
            <Headline6 className="ma0">{data.title}</Headline6>
          </div>
          <img className="contest-image" alt="icon" src={data.imageUrl} />
        </div>
      </Card>
    </Link>
  );
};

export default ContestsCard;
