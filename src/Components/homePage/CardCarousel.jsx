import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import HomePageCard from './LeaderboardCard/HomePageCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import cardData from './cardData';
import './homePageContainer.css';
import TwoInOne from './LeaderboardCard/TwoInOne/TwoInOne';
// import PosterCard from './PosterCard/PosterCard';

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
  return (
    <Slider {...settings} className="pa0 mr2-m mr2-l ">
      {isScreenSmall ? (
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

      {/* <ContestsCard /> */}
      {/* <PosterCard /> */}
    </Slider>
  );
};

export default CardCarousel;
