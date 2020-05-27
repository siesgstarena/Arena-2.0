import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
import CardCarousel from './CardCarousel';
import WhatsNew from './WhatsNew/WhatsNew';
import PosterCard from './PosterCard/PosterCard';
import RecommendCard from './RecommendCard/RecommendCard';

// const PosterCard = React.lazy(() => import('./PosterCard/PosterCard'));

const HomePageContainer = () => (
  <div className="center">
    <PosterCard />
    <Grid>
      <Row>
        <Cell desktopColumns={7} tabletColumns={8} phoneColumns={6}>
          <CardCarousel />
        </Cell>
        <Cell desktopColumns={5} tabletColumns={8}>
          <WhatsNew />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8}>
          <RecommendCard />
        </Cell>
      </Row>
    </Grid>
  </div>
);
export default HomePageContainer;
