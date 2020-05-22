import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import CustomSnackbar from '../../common/Snackbar';
import ContestDetails from './ContestDetails';
import Statistics from './Statistics';
import Announcements from './Announcements';
import ProblemsCardArray from './ProblemsCardArray';

const ContestDashboard = ({
  contest,
  stats,
  announcement,
  setSnackbarMessage,
  snackbarMessage,
  problems,
}) => (
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
        <Announcements announcement={announcement} />
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <CustomSnackbar setSnackbarMessage={setSnackbarMessage} snackbarMessage={snackbarMessage} />
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <ProblemsCardArray problems={problems} setSnackbarMessage={setSnackbarMessage} />
      </Cell>
    </Row>
  </Grid>
);

ContestDashboard.propTypes = {
  contest: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired,
  announcement: PropTypes.string.isRequired,
  setSnackbarMessage: PropTypes.func,
  snackbarMessage: PropTypes.string,
  problems: PropTypes.array.isRequired,
};

export default ContestDashboard;
