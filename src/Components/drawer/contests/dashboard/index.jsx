import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ProblemsTable from './ProblemsTable';
import SubmissionDetails from './SubmissionDetails';
import ContestDetails from '../common/ContestDetails';
import Announcements from '../common/Announcements';
import 'tachyons';

const ContestDashboard = () => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <Cell className="">
          <ProblemsTable />
        </Cell>
        <Cell>
          <SubmissionDetails />
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

export default ContestDashboard;
