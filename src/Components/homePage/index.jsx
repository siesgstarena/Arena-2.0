import React from 'react';
import { Grid, Row, Cell } from '@material/react-layout-grid';
// import Fab from '@material/react-fab';
// import MaterialIcon from '@material/react-material-icon';
import CardCarousel from './CardCarousel';
import WhatsNew from './WhatsNew/WhatsNew';
// import PosterCard from './PosterCard/PosterCard';
import RecommendCard from './RecommendCard/RecommendCard';
// import Loading from '../common/Loading';

// const PosterCard = React.lazy(() => import('./PosterCard/PosterCard'));

const HomePageContainer = () => {
  // const [isImmersive, setImmersive] = useState(false);

  // const iconToggle = isImmersive ? 'toggle_on' : 'toggle_off';
  // const toggleMode = () => setImmersive(!isImmersive);
  return (
    <div className="center">
      {/* <Fab
        textLabel="Focus"
        className="float-btn"
        icon={<MaterialIcon icon={iconToggle} />}
        onClick={toggleMode}
      /> */}
      {/* {isImmersive ? (
        <Suspense fallback={<Loading />}>
          <PosterCard />
        </Suspense>
      ) : ( */}
      <Grid className="pa0 ma0">
        <Row>
          <Cell desktopColumns={8} tabletColumns={8} phoneColumns={6}>
            <CardCarousel />
          </Cell>
          <Cell desktopColumns={4} tabletColumns={8}>
            <WhatsNew />
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns={12} tabletColumns={8}>
            <RecommendCard />
          </Cell>
        </Row>
      </Grid>
      {/* )} */}
    </div>
  );
};
export default HomePageContainer;
