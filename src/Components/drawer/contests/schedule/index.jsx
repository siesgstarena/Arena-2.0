import React from 'react';
import { useQuery } from '@apollo/client';
import { Headline6 } from '@material/react-typography';
import { GET_CONTEST_HOMEPAGE_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ContestsSchedule from './ContestsSchedule';
import LoadingTable from '../../../common/LoadingTable/index';
import ContestsTable from './ContestsTable';

const ContestScheduleContainer = () => {
  document.title = 'SIESGSTArena | Contest';
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { loading, error, data } = useQuery(GET_CONTEST_HOMEPAGE_DETAILS);

  if (loading) {
    const tableHeadings = ['Contest name', 'Setter', 'Start', ' Length', 'More details'];
    return (
      <ContestsSchedule>
        <LoadingTable tableHeadings={tableHeadings} count={10} />
        <Headline6 className="purple mb2">Past Contests</Headline6>
        <LoadingTable tableHeadings={tableHeadings} count={50} />
      </ContestsSchedule>
    );
  }
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.contests) {
    const { contests } = data;
    return (
      <ContestsSchedule>
        {contests.contests.length ? (
          <>
            <Headline6 className="purple mb2 mt1">Current or Upcoming Contests</Headline6>
            <ContestsTable contests={contests.contests} />
          </>
        ) : (
          ''
        )}
        <Headline6 className="purple mb2">Past Contests</Headline6>
        <ContestsTable contests={contests.finishedContests} />
      </ContestsSchedule>
    );
  }
  if (isSessionExpired(data.contests)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default ContestScheduleContainer;
