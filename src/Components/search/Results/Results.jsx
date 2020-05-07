import React from 'react';
import UserResults from './UserResults';
import ProblemResults from './ProblemResults';
import PostResults from './PostResults';


const resultArray = [
  [
    {
      user: 'DemoUser',
      userId: '5b5d756b37392f89933e7515',
      userRating: 1400,
      userBio: 'Code Blooded',
      following: 4,
      followers: 1,
      memberSince: 'January 2020',
    },
  ],
  [
    {
      problemCode: 'SRM10C',
      problemName: 'OH? Something is happening.',
      contestCode: 'SRM10',
      problemTags: ['adhoc', 'strings'],
      problemPosted: 'Aug 4, 2019',
      points: '250',
    },
  ],
  [
    {
      postId: '5d600383ea727e0022282644',
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
    <UserResults userArray={resultArray[0]} />
    <ProblemResults problemArray={resultArray[1]} />
    <PostResults postArray={resultArray[2]} />
  </div>
);

export default Results;
// borderColor: userColor(userRating, userId)
