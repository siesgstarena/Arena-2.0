import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import Skeleton from 'react-loading-skeleton';
import LoadingParagraphArray from '../../common/LoadingParagraphArray';

const ProfileLoadingSkeleton = () => (
  <div className="mw7 pa2 center pt3">
    <Grid className="mw8 center" style={{ margin: 0, padding: 0 }}>
      <Row className="">
        <Cell desktopColumns={8} tabletColumns={5} phoneColumns={2}>
          <Skeleton count={6} />
        </Cell>
        <Cell desktopColumns={4} tabletColumns={3} phoneColumns={2}>
          <div className="fr">
            <Skeleton circle height={100} width={100} />
          </div>
        </Cell>
      </Row>
    </Grid>
    <LoadingParagraphArray count={4} loadingParagraphClassname="mt5 mb5" />
  </div>
);

export default ProfileLoadingSkeleton;
