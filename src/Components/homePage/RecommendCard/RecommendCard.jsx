import React from 'react';
import Card from '@material/react-card';
import { Headline6, Body1, Headline5 } from '@material/react-typography';
import './RecommendCard.scss';

const blogData = [
  {
    author: 'Random',
    title: 'Blog 1: Random idea 1',
    date: 'May 27, 2020',
  },
  {
    author: 'Random',
    title: 'Blog 2: Random idea 2',
    date: 'May 27, 2020',
  },
  {
    author: 'Random',
    title: 'Blog 3: Random idea 3',
    date: 'May 27, 2020',
  },
  {
    author: 'Random',
    title: 'Blog 4: Random idea 4',
    date: 'May 27, 2020',
  },
  {
    author: 'Random',
    title: 'Blog 5: Random idea 5',
    date: 'May 27, 2020',
  },
];
const RecommendCard = () => (
  <Card className="ma0 mt3">
    <div className="container">
      <Headline5 className="ma0 container-title">
        Recommended
        <img alt="pin" src="https://img.icons8.com/material-rounded/24/000000/pin.png" />
      </Headline5>
      <div className="recommend">
        {blogData.map((blog) => (
          <div className="recommend-card">
            <Headline6 className="ma0">{blog.title}</Headline6>
            <div className="recommend-card-content">
              <Body1 className="ma0">{blog.author}</Body1>
              <span>{blog.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

export default RecommendCard;
