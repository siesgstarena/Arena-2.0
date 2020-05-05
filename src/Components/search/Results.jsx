import React from 'react';
// import { Link } from 'react-router-dom';
import { Headline6 } from '@material/react-typography';
// import PropTypes from 'prop-types';
// import Pill from '../common/Pill';

// const tagsArray = tags => (tags.map(tag => (
//   <Link key={tag} to={`/search?q=${tag}`} className="pointer dim mr2">
//     <Pill content={tag} />
//   </Link>
// )));


const resultArray = [
  [
    {
      user: 'DemoUser',
      userId: '5b5d756b37392f89933e7515',
      userBio: 'Code Blooded',
      following: 4,
      followers: 1,
      memberSince: 'January 2020',
    },
  ],
  [
    {
      problemCode: 'SRM10C',
      contestCode: 'SRM10',
      problemTags: ['adhoc', 'strings'],
      problemPosted: 'Aug 4, 2019',
      points: '250',
    },
  ],
  [
    {
      postName: 'Coding?',
      postTags: ['Coding', 'FE'],
      postAuthor: 'Mithil Kiran Poojary',
      postDate: 'Nov 9, 2018',
      timeToRead: '2 min',
    },
  ],
];
const Results = () => (
  <div>
    <Headline6>Users</Headline6>
    <hr className="ba b--purple mb1" />
    {
      resultArray[0].map(
        obj => (
          <>
            <Headline6>{obj.user}</Headline6>
            <Headline6>{obj.userId}</Headline6>
            <Headline6>{obj.followers}</Headline6>
            <Headline6>{obj.userBio}</Headline6>
            <Headline6>{obj.memberSince}</Headline6>
            <Headline6>{obj.following}</Headline6>
          </>
        ),
      )
    }
    Results
  </div>
);

export default Results;
