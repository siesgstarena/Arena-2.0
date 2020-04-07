import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestDetails from '../common/ContestDetails';
import Announcements from '../common/Announcements';
import SubmitFile from './SubmitFile';
import 'tachyons';

// Layout of Scoreboard page: DataTable , ContestDetails and Announcements
// referred the status page
const Submission = () => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <Cell className="button">
          <SubmitFile />
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


export default Submission;
