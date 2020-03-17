/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4 } from '@material/react-typography';
import { useQuery } from '@apollo/react-hooks';
import { useParams } from 'react-router-dom';
import ContestDetails from './ContestDetails';
import Statistics from './Statistics';
import Announcements from './Announcements';
import ProblemsCardArray from './ProblemsCardArray';
import { GET_ADMIN_DASHBOARD_DETAILS } from '../../../graphql/queries';
import Spinner from '../../common/Spinner/index';
import SomethingWentWrong from '../../common/SomethingWentWrong/index';
// import redirectUnautorisedUser from '../../../utils/redirectUnauthorisedUser';

const ContestDashboard = () => {
  const { contestId } = useParams();
  // const history = useHistory();
  const { loading, error, data } = useQuery(GET_ADMIN_DASHBOARD_DETAILS, {
    variables: { code: contestId },
  });

  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="Selected Contest Doesn't exist" />;
  if (data.adminDashboard.contest) {
    // console.log(data);
    const response = data.adminDashboard;
    const { contest } = response;
    const { problems } = response;
    const { totalCount, acceptedCount, usersCount } = response;
    const stats = {
      totalCount,
      acceptedCount,
      usersCount,
    };
    return (
      <Grid className="mw7 center pa2">
        <Row>
          <Cell columns={12}>
            <Headline4 className="purple mt1 mb1">Contest Dashboard</Headline4>
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <ContestDetails contest={contest} />
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
            <Statistics stats={stats} />
          </Cell>
          <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
            <Announcements announcement={contest.announcement} />
          </Cell>
        </Row>
        <Row>
          <Cell columns={12}>
            <ProblemsCardArray problems={problems} />
          </Cell>
        </Row>
      </Grid>
    );
  }
  // if (redirectUnautorisedUser(history, data.adminDashboard)) {
  //   console.log('Executed');
  //   return null;
  // }
  return <SomethingWentWrong message={data.adminDashboard.message} />;
};

export default ContestDashboard;
