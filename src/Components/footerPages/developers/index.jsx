import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline6, Body1 } from '@material/react-typography';
import developers from './developers';
import DeveloperCard from './DeveloperCard';
import 'tachyons';

const Developers = () => {
  const alumniCardsArray = developers.slice(0, 3).map(developer => (
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
  const developerCardsArray = developers.slice(3, 6).map(developer => (
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
  const operationManagersCardsArray = developers.slice(6, 12).map(developer => (
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
          SIESGSTarena Alumni
        </span>
        <Body1 className="mid-gray"> People behind the chapter</Body1>
      </Headline6>
      <Grid>
        <Row>
          {alumniCardsArray}
        </Row>
      </Grid>

      <Headline6>
        <span className="purple">
          SIESGSTarena developers
        </span>
        <Body1 className="mid-gray"> People behind this platform</Body1>
      </Headline6>
      <Grid>
        <Row>
          {developerCardsArray}
        </Row>
      </Grid>

      <Headline6>
        <span className="purple">
          SIESGSTarena operation managers
        </span>
        <Body1 className="mid-gray"> People behind building the operations</Body1>
      </Headline6>
      <Grid>
        <Row>
          {operationManagersCardsArray}
        </Row>
      </Grid>

    </div>
  );
};

export default Developers;
