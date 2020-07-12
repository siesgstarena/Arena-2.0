import React from 'react';
import Card from '@material/react-card';
import { Headline6, Headline5 } from '@material/react-typography';
import { Link } from 'react-router-dom';
import cardData from '../../cardData';
import './TwoInOne.scss';

// const cardProps = [
//   {
//     id: 123,
//     title: 'At the Top!',
//     props: 'ratings',
//     icon: 'https://cdn0.iconfinder.com/data/icons/recreation-and-hobbies/2000/47-512.png',
//     subHead: 'Top 3 Performers!',
//     cardLink: '/ratings',
//   },
//   {
//     id: 124,
//     title: 'Exponentials!',
//     props: 'ratingChange',
//     icon: 'https://img.icons8.com/plasticine/128/000000/positive-dynamic--v1.png',
//     subHead: 'Top 3 Improvements!',
//     cardLink: '/contests/GBYE20/change',
//   },
// ];

const TwoInOne = () => {
  return (
    <Card
      className="center ma0 pa1"
      style={{ boxShadow: 'inset 0em -0.1em 0.3em 0.2em #eeeeee', borderRadius: '10px' }}
    >
      <div className="layout">
        {cardData.map((card) => {
          // const { icon, title, subHead, props, cardLink } = cardProps[index];
          return (
            <div className="lbCard" key={card.id}>
              <div className="lbCard-header">
                <img
                  alt="icon"
                  className="b--transparent ba br-100 shadow-1"
                  src={card.icon}
                  height="75vh"
                />
                <div className="ml2">
                  <Headline5 className="ma0 purple">{card.title}</Headline5>
                  <span className="mid-gray">{card.subHead}</span>
                </div>
              </div>
              <div className="lbCard-content">
                {card.topThree.map((eachCard) => (
                  <div className="lbCard-content-each" key={eachCard.id}>
                    <Link to={`/profile/${eachCard.id}`} className="no-underline black">
                      <Headline6 style={{ lineHeight: '1.5rem' }} className="ma0 flex">
                        {eachCard.name}
                      </Headline6>
                    </Link>
                    <Headline6 className="ma0 ml2 pointer black">
                      ({eachCard[card.props]})
                    </Headline6>
                  </div>
                ))}
              </div>
              <Link to={card.cardLink} className="no-underline pointer tc">
                <Headline6 className="ma0 purple">View More</Headline6>
              </Link>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
export default TwoInOne;
