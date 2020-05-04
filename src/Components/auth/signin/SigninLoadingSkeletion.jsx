import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Skeleton from 'react-loading-skeleton';

const SigninLoadingSkeleton = () => (
  <Grid className="mw8 center">
    <Row className="">
      <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
        <Skeleton />
        <Skeleton />
        <br />
        <br />
        <br />
        <Skeleton />
        <Skeleton />
      </Cell>
      <Cell desktopColumns={5} tabletColumns={8} phoneColumns={4}>
        <Skeleton />
        <br />
        <Skeleton />
        <br />
        <Skeleton />
        <br />
        <br />
        <Skeleton count={6} />
      </Cell>
    </Row>
  </Grid>
);

export default SigninLoadingSkeleton;
