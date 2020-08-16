import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import CardCarousel from './CardCarousel';
import WhatsNew from './WhatsNew/WhatsNew';
import RecommendCard from './RecommendCard/RecommendCard';
import ContestsCard from './ContestsCard/ContestsCard';

const HomePageContainer = () => (
  <div className="center">
    <Grid className="pa0 ma0">
      <Row>
        <Cell desktopColumns={9} tabletColumns={5} phoneColumns={6}>
          <CardCarousel />
        </Cell>
        <Cell desktopColumns={3} tabletColumns={3}>
          <ContestsCard />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={4} tabletColumns={8}>
          <WhatsNew />
        </Cell>
        <Cell desktopColumns={8} tabletColumns={8}>
          <RecommendCard />
        </Cell>
      </Row>
    </Grid>
  </div>
);
export default HomePageContainer;
