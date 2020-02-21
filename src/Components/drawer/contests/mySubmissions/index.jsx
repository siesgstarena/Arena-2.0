import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import SubmissionStatusTable from './SubmissionStatusTable';
import ContestDetails from '../common/ContestDetails';
import Announcements from '../common/Announcements';
import 'tachyons';

const SubmissionStatus = () => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <Cell className="">
          <SubmissionStatusTable />
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

export default SubmissionStatus;
