import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4 } from '@material/react-typography';
import PropTypes from 'prop-types';
import ContestDetails from './ContestDetails';
import Statistics from './Statistics';
import Announcements from './Announcements';
import ProblemsCardArray from './ProblemsCardArray';

const ContestDashboard = ({ setSnackbarMessage }) => (
  <Grid className="mw7 center pa2">
    <Row>
      <Cell columns={12}>
        <Headline4 className="purple mt1 mb1">Contest Dashboard</Headline4>
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <ContestDetails />
      </Cell>
    </Row>
    <Row>
      <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
        <Statistics />
      </Cell>
      <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
        <Announcements />
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <ProblemsCardArray
          setSnackbarMessage={setSnackbarMessage}
        />
      </Cell>
    </Row>
  </Grid>
);

ContestDashboard.propTypes = {
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default ContestDashboard;
