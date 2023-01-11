import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_UPCOMING_CURRENT_CONTESTS, GET_TRENDING_BLOGS } from '../graphql/queries';

const useLatestTrendingInfo = () => {
  const { loading, error, data } = useQuery(GET_UPCOMING_CURRENT_CONTESTS);
  const {
    error: trendingerror,
    data: trendingdata,
    loading: trendingloading,
  } = useQuery(GET_TRENDING_BLOGS, {
    variables: {
      limit: 3,
    },
  });
  const err = error || trendingerror;
  const load = loading || trendingloading;
  const [latestInfo, setLatestInfo] = React.useState([]);
  const [trendingInfo, setTrendingInfo] = React.useState([]);
  useEffect(() => {
    if (data && data.upcomingcurrentContests) {
      const currentContest = data.upcomingcurrentContests[0]?.currentContests.map((contest) => ({
        name: contest.name,
        contestLink: `/contests/${contest.code}`,
        endsIn: new Date(contest.endsIn * 1).toLocaleString(),
      }));
      const upcomingContest = data.upcomingcurrentContests[0]?.upcomingContests.map((contest) => ({
        name: contest.name,
        contestLink: `/contests/${contest.code}`,
        endsIn: new Date(contest.endsIn * 1).toLocaleString(),
      }));
      if (currentContest.length === 0) {
        currentContest.push({
          name: 'No current contests',
          contestLink: '/contests',
          endsIn: '',
        });
      }
      if (upcomingContest.length === 0) {
        upcomingContest.push({
          name: 'No upcoming contests',
          contestLink: '/contests',
          endsIn: '',
        });
      }
      setLatestInfo({
        current: currentContest,
        upcoming: upcomingContest,
      });
    }
  }, [data]);
  useEffect(() => {
    if (trendingdata && trendingdata.trendingBlogs) {
      const trendingInfos = trendingdata.trendingBlogs.map((blog) => ({
        name: blog.title,
        contestLink: `/blogs/${blog._id}`,
        endsIn: new Date(blog.createdAt * 1).toLocaleString('en-us', {
          month: 'short',
          day: 'numeric',
        }),
      }));
      if (trendingInfos.length === 0) {
        trendingInfos.push({
          name: 'No trending blogs',
          contestLink: '/blogs',
          endsIn: '',
        });
      }
      setTrendingInfo(trendingInfos);
    }
  }, [trendingdata]);
  return { loading: load, error: err, latestInfo, trendingInfo };
};

export default useLatestTrendingInfo;
