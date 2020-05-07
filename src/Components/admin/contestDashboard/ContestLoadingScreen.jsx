import React from 'react';
import { Headline4 } from '@material/react-typography';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Skeleton from 'react-loading-skeleton';
import LoadingInfoArray from '../../common/LoadingInfoArray';

const ContestLoadingScreen = () => (
  <Grid className="mw7 center pa2">
    <Row>
      <Cell columns={12}>
        <Headline4 className="purple mt1 mb1">Contest Dashboard</Headline4>
      </Cell>
    </Row>
    <Row>
      <Cell columns={12}>
        <LoadingInfoArray />
      </Cell>
    </Row>
    <Row className="pt3">
      <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
        <Skeleton height={100} />
      </Cell>
      <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
        <Skeleton height={100} />
      </Cell>
    </Row>
    <Row className="pt4">
      <Cell columns={12}>
        <div className="w-50">
          <Skeleton />
        </div>
      </Cell>
    </Row>
    <Row className="pt3">
      <Cell columns={12}>
        <Skeleton height={100} />
      </Cell>
      <Cell columns={12}>
        <Skeleton height={100} />
      </Cell>
      <Cell columns={12}>
        <Skeleton height={100} />
      </Cell>
    </Row>
  </Grid>
);

export default ContestLoadingScreen;
