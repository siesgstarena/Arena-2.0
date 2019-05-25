import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestDetails from '../contestPage/ContestDetails';
import Announcements from '../contestPage/Announcements';
import 'tachyons';

const ContestPage = () => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <div />
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


export default ContestPage;
