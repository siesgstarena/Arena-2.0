import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline6, Body1 } from '@material/react-typography';
import developers from './developers';
import DeveloperCard from './DeveloperCard';
import 'tachyons';

const Developers = () => {
  const developerCardsArray = developers.map(developer => (
    <Cell key={developer.id} desktopColumns={3} tabletColumns={4} phoneColumns={2}>
      <DeveloperCard
        name={developer.name}
        imageUrl={developer.imageUrl}
        githubUrl={developer.githubUrl}
        linkdinUrl={developer.linkdinUrl}
        twitterUrl={developer.twitterUrl}
        facebookUrl={developer.facebookUrl}
        instagramUrl={developer.instagramUrl}
      />
    </Cell>
  ));

  return (
    <div className="mw8-ns pa2 center">
      <Headline6>
        <span className="purple">
          SIESGSTarena developers
        </span>
        <Body1 className="mid-gray"> People behind building this platfrom </Body1>
      </Headline6>
      <Grid>
        <Row>
          {developerCardsArray}
        </Row>
      </Grid>
    </div>
  );
};

export default Developers;
