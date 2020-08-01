import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Headline6 } from '@material/react-typography';
import { GET_CONTEST_HOMEPAGE_DETAILS } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ContestsSchedule from './ContestsSchedule';
import LoadingTable from '../../../common/LoadingTable/index';
import ContestsTable from './ContestsTable';
import NoContestsPage from './NoContestsPage';

const ContestScheduleContainer = () => {
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
          <ContestsTable contests={contests.contests} />
        ) : (
          <div className="flex flex-column center items-center">
            <NoContestsPage width="20vw" height="30vh" />
            <Headline6 className="ma0">Coming Soon...</Headline6>
          </div>
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
