import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_UPCOMING_CURRENT_CONTESTS } from '../graphql/queries';

const useLatestTrendingInfo = () => {
  const { error, data } = useQuery(GET_UPCOMING_CURRENT_CONTESTS);
  const [latestInfo, setLatestInfo] = React.useState([]);
  const [trendingInfo, setTrendingInfo] = React.useState([]);
  const [loadingData, setLoadingData] = React.useState(true);
  useEffect(() => {
    if (data && data.upcomingcurrentContests) {
      const latestInfos = data.upcomingcurrentContests[0]?.currentContests.map((contest) => ({
        name: contest.name,
        contestLink: `/contests/${contest.code}`,
        endsIn: new Date(contest.endsIn * 1).toLocaleString(),
      }));
      const trendingInfos = data.upcomingcurrentContests[0]?.upcomingContests.map((contest) => ({
        name: contest.name,
        contestLink: `/contests/${contest.code}`,
        endsIn: new Date(contest.endsIn * 1).toLocaleString(),
      }));
      if (latestInfos.length === 0) {
        latestInfos.push({
          name: 'No current contests',
          contestLink: '/contests',
          endsIn: '',
        });
      }
      if (trendingInfos.length === 0) {
        trendingInfos.push({
          name: 'No upcoming contests',
          contestLink: '/contests',
          endsIn: '',
        });
      }
      setLatestInfo(latestInfos);
      setTrendingInfo(trendingInfos);
      setLoadingData(false);
    }
  }, [data]);

  return { loading: loadingData, error, latestInfo, trendingInfo };
};

export default useLatestTrendingInfo;
