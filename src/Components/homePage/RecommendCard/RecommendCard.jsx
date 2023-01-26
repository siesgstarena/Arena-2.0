import React, { useContext } from 'react';
import Card from '@material/react-card';
import { Headline6, Body1, Headline5 } from '@material/react-typography';
import './RecommendCard.scss';
import MaterialIcon from '@material/react-material-icon';
import { Link } from 'react-router-dom';
import SomethingWentWrong from '../../common/SomethingWentWrong';
import HomePage from '../../../Contexts/HomePage';

// const blogData = [
//   {
//     author: 'Random',
//     title: 'Blog 1: Random idea 1 idea 2 idea3 idea4',
//     date: 'May 27, 2020',
//     link: '/blogs/5e9418a8d998010022434057',
//   },
//   {
//     author: 'Random',
//     title: 'Blog 2: Random idea 2',
//     date: 'May 27, 2020',
//     link: '/blogs/5e9418a8d998010022434057',
//   },
//   {
//     author: 'Random',
//     title: 'Blog 3: Random idea 3',
//     date: 'May 27, 2020',
//     link: '/blogs/5e9418a8d998010022434057',
//   },
//   {
//     author: 'Random',
//     title: 'Blog 4: Random idea 4',
//     date: 'May 27, 2020',
//     link: '/blogs/5e9418a8d998010022434057',
//   },
//   {
//     author: 'Random',
//     title: 'Blog 5: Random idea 5',
//     date: 'May 27, 2020',
//     link: '/blogs/5e9418a8d998010022434057',
//   },
// ];
const RecommendCard = () => {
  const { recommendCardError: error, recommendCardData: blogData } = useContext(HomePage);
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  return (
    <Card className="ma0 mt3">
      <div className="container">
        <Headline5 className="container-title">
          Blogs
          <Link to="/blogs">
            <MaterialIcon icon="push_pin" />
          </Link>
        </Headline5>
        <div className="recommend">
          {blogData.map((blog) => (
            <Link to={blog.link} className="recommend-card" key={blog.title}>
              {/* <div className="recommend-card" key={blog.title}> */}
              <Headline6 className="recommend-card-title">{blog.title}</Headline6>
              <div className="recommend-card-content">
                <Body1 className="ma0">{blog.author}</Body1>
                <span>{blog.date}</span>
              </div>
              {/* </div> */}
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default RecommendCard;
