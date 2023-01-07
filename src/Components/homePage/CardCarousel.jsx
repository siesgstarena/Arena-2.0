import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import HomePageCard from './LeaderboardCard/HomePageCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import cardData from './cardData';
import './homePageContainer.scss';
import TwoInOne from './LeaderboardCard/TwoInOne';
import useHomePage from '../../customHooks/useHomePage';
// import PosterCard from './PosterCard/PosterCard';
import Spinner from '../common/Spinner';
import SomethingWentWrong from '../common/SomethingWentWrong';

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
  const { cardData, loading, error } = useHomePage();
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
  if (loading) return <Spinner />;
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
