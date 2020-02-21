import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import FilterSelectors from './FilterSelectors';
import ProblemStatusTable from './ProblemStatusTable';
import ContestDetails from '../common/ContestDetails';
import Announcements from '../common/Announcements';
import 'tachyons';

const Status = () => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <FilterSelectors />
      </Cell>
      <Cell desktopColumns={9} tabletColumns={8}>
        <ProblemStatusTable />
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

export default Status;
