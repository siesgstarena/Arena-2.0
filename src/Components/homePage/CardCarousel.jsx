import React, { useState, useEffect, useContext } from 'react';
import Slider from 'react-slick';
import HomePageCard from './LeaderboardCard/HomePageCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import cardData from './cardData';
import './homePageContainer.scss';
import TwoInOne from './LeaderboardCard/TwoInOne';
import SomethingWentWrong from '../common/SomethingWentWrong';
import HomePage from '../../Contexts/HomePage';

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

const CardCarousel = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const { CardCarouselDate: cardData, CardCarouselError: error } = useContext(HomePage);
  useEffect(() => {
    const updateWidthOnResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWidthOnResize);

    return () => {
      window.removeEventListener('resize', updateWidthOnResize);
    };
  });
  const isScreenSmall = width < 840;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  return (
    <Slider {...settings} className="pa0 mr2-m mr2-l ">
      {isScreenSmall && cardData ? (
        cardData.map((card) => (
          <HomePageCard
            key={card.id}
            title={card.title}
            props={card.props}
            topThree={card.topThree}
            titleImage={card.icon}
            subHead={card.subHead}
            cardLink={card.cardLink}
          />
        ))
      ) : (
        <TwoInOne />
      )}
    </Slider>
  );
};

export default CardCarousel;
