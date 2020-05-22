import React from 'react';
import Slider from 'react-slick';

import HomePageCard from './homePageCard/HomePageCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardData from './cardData';
import './homePageContainer.css';
import ContestsCard from './ContestsCard/ContestsCard';


const cardProps = [
  {
    title: 'At the Top!',
    props: 'ratings',
    icon: 'https://cdn0.iconfinder.com/data/icons/recreation-and-hobbies/2000/47-512.png',
    subHead: 'Top 3 Performers!',
    cardLink: '/ratings',
  },
  {
    title: 'Exponentials!',
    props: 'ratingChange',
    icon: 'https://img.icons8.com/plasticine/128/000000/positive-dynamic--v1.png',
    subHead: 'Top 3 Improvements!',
    cardLink: '/contests/GBYE20/change',
  },
];
const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  swipeToSlide: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CardCarousel = () => (
  <Slider {...settings} className="pa0 mr2-m mr2-l ">
    {
    cardData.map(
      (card, index) => (
        <HomePageCard
          key={card}
          title={cardProps[index].title}
          props={cardProps[index].props}
          topThree={card}
          titleImage={cardProps[index].icon}
          subHead={cardProps[index].subHead}
          cardColor={cardProps[index].cardColor}
          cardLink={cardProps[index].cardLink}
        />
      ),
    )
    }
    <ContestsCard />

  </Slider>
);

export default CardCarousel;
