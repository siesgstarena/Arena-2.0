import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_SCOREBOARD_BY_CONTEST_CODE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import Scoreboard from './Scoreboard';
import ContestTabBar from '../common/ContestTabBar';
import Spinner from '../../../common/Spinner/index';

const ScoreboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const {
    loading, error, data,
  } = useQuery(GET_SCOREBOARD_BY_CONTEST_CODE, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.scoreboard) {
    const { scoreboard } = data.scoreboard;
    const { problems } = data.scoreboard;
    // console.log(data.scoreboard.problems, problems);
    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <ContestTabBar />
        </div>
        <Scoreboard
          scoreboardDetails={scoreboard}
          problems={problems}
        />
      </div>
    );
  }
  if (isSessionExpired(data.scoreboard)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ScoreboardContainer;
