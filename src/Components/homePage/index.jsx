import React from 'react';
import { useQuery } from '@apollo/client';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import CardCarousel from './CardCarousel';
import WhatsNew from './WhatsNew/WhatsNew';
import RecommendCard from './RecommendCard/RecommendCard';
import ContestsCard from './ContestsCard/ContestsCard';
import HomePage from '../../Contexts/HomePage';
import Spinner from '../common/Spinner';
import useHomePageCardCarousel from '../../customHooks/useHomePageCardCarousel';
import { GET_CURRENT_ANNOUNCEMENT } from '../../graphql/queries';
import useLatestTrendingInfo from '../../customHooks/useLatestTrendingInfo';
import usePinnedBlogs from '../../customHooks/usePinnedBlogs';

const HomePageContainer = () => {
  const {
    loading: TrendingLoading,
    error: TrendingError,
    latestInfo: TrendingLatestInfo,
    trendingInfo: TrendingTrendingInfo,
  } = useLatestTrendingInfo();
  const {
    cardData: CardCarouselDate,
    loading: CardCarouselLoading,
    error: CardCarouselError,
  } = useHomePageCardCarousel();
  const {
    loading: recommendCardLoading,
    error: recommendCardError,
    blogData: recommendCardData,
  } = usePinnedBlogs();
  const {
    loading: AnnouncementLoading,
    error: AnnouncementError,
    data: AnnouncementData,
  } = useQuery(GET_CURRENT_ANNOUNCEMENT);
  // show loader
  if (CardCarouselLoading || TrendingLoading || recommendCardLoading || AnnouncementLoading)
    return <Spinner />;
  return (
    <HomePage.Provider
      value={{
        CardCarouselDate,
        CardCarouselError,
        AnnouncementData,
        AnnouncementError,
        TrendingLatestInfo,
        TrendingTrendingInfo,
        TrendingError,
        recommendCardData,
        recommendCardError,
      }}
    >
      <div className="center">
        <Grid className="pa0 ma0">
          <Row>
            <Cell desktopColumns={9} tabletColumns={5} phoneColumns={6}>
              <CardCarousel />
            </Cell>
            <Cell desktopColumns={3} tabletColumns={3}>
              <ContestsCard />
            </Cell>
          </Row>
          <Row>
            <Cell desktopColumns={4} tabletColumns={8}>
              <WhatsNew />
            </Cell>
            <Cell desktopColumns={8} tabletColumns={8}>
              <RecommendCard />
            </Cell>
          </Row>
        </Grid>
      </div>
    </HomePage.Provider>
  );
};
export default HomePageContainer;
