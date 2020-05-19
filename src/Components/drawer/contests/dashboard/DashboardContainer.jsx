import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import { GET_CONTEST_DASHBOARD } from '../../../../graphql/queries';
import SomethingWentWrong from '../../../common/SomethingWentWrong/index';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import ProblemsTable from './ProblemsTable';
import LoadingTable from '../../../common/LoadingTable/index';

const DashboardContainer = () => {
  const { redirectOnSessionExpiredBeforeRender, isSessionExpired } = useSessionExpired();
  const { contestId } = useParams();
  const { loading, error, data } = useQuery(GET_CONTEST_DASHBOARD, {
    variables: { code: contestId },
  });

  if (loading)
    return (
      <LoadingTable
        tableHeadings={['#', 'Points', 'Problem Name']}
        count={10}
        tableHeadingClassName=""
      />
    );
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.dashboard) {
    const problems = data.dashboard;
    // console.log(data.dashboard.problems, problems);
    return <ProblemsTable problems={problems} />;
  }
  if (isSessionExpired(data.dashboard)) {
    // since the component hasn't rendered or returned anything,
    // we use redirectOnSessionExpiredBeforeRender function
    return redirectOnSessionExpiredBeforeRender();
  }
  // case for the user not being admin or superuser
  return <SomethingWentWrong message="An unexpected error has been encountered" />;
};

export default DashboardContainer;
