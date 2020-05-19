import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_SCOREBOARD_BY_CONTEST_CODE } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import Scoreboard from './Scoreboard';
import LoadingTable from '../../../common/LoadingTable/index';
import EmptyData from '../../../common/EmptyData';

const ScoreboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_SCOREBOARD_BY_CONTEST_CODE, {
    variables: { code: contestId },
  });
  const tableHeadings = ['#', 'Who', '=', 'Time'];

  if (loading) return <LoadingTable tableHeadings={tableHeadings} count={30} />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.scoreboard) {
    const { scoreboard } = data.scoreboard;
    const { problems } = data.scoreboard;
    // console.log(data.scoreboard.problems, problems);
    return (
      <div>
        {scoreboard.length !== 0 ? (
          <Scoreboard scoreboardDetails={scoreboard} problems={problems} />
        ) : (
          <EmptyData message="The scoreboard is empty" />
        )}
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
