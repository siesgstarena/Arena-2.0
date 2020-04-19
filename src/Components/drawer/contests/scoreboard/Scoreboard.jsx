import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestDetails from '../common/ContestDetails';
import Announcements from '../common/Announcements';
import DataTable from './DataTable';
import 'tachyons';

// Layout of Scoreboard page: DataTable , ContestDetails and Announcements
// referred the status page
const Scoreboard = ({ scoreboardDetails, problems }) => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <Cell className="">
          <DataTable scoreboardDetails={scoreboardDetails} problems={problems} />
        </Cell>
      </Cell>
      <Cell desktopColumns={3} tabletColumns={8}>
        <Cell>
          <ContestDetails />
        </Cell>
        <Cell>
          <Announcements />
        </Cell>
      </Cell>
    </Row>
  </Grid>
);

Scoreboard.propTypes = {
  problems: PropTypes.array.isRequired,
  scoreboardDetails: PropTypes.array.isRequired,
};


export default Scoreboard;
