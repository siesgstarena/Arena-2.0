import { useQuery } from '@apollo/client';
import { GET_CURRENT_ANNOUNCEMENT } from '../graphql/queries';
import useHomePageCardCarousel from './useHomePageCardCarousel';
import useLatestTrendingInfo from './useLatestTrendingInfo';
import usePinnedBlogs from './usePinnedBlogs';

const useHomePage = () => {
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
  const loading =
    TrendingLoading || CardCarouselLoading || recommendCardLoading || AnnouncementLoading;
  return {
    loading,
    CardCarouselDate,
    CardCarouselError,
    AnnouncementData,
    AnnouncementError,
    TrendingLatestInfo,
    TrendingTrendingInfo,
    TrendingError,
    recommendCardData,
    recommendCardError,
  };
};

export default useHomePage;
