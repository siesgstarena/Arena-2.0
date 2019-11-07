import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline6, Body1 } from '@material/react-typography';
import { alumni, developers, operationalManagers } from './ourTeam';
import DeveloperCard from './MemberCard';
import 'tachyons';

const OurTeam = () => {
  const alumniCardsArray = alumni.map(developer => (
    <Cell key={developer.id} desktopColumns={3} tabletColumns={4} phoneColumns={2}>
      <DeveloperCard
        name={developer.name}
        imageUrl={developer.imageUrl}
        githubUrl={developer.githubUrl}
        linkedinUrl={developer.linkedinUrl}
        twitterUrl={developer.twitterUrl}
        facebookUrl={developer.facebookUrl}
        instagramUrl={developer.instagramUrl}
      />
    </Cell>
  ));
  const developerCardsArray = developers.map(developer => (
    <Cell key={developer.id} desktopColumns={3} tabletColumns={4} phoneColumns={2}>
      <DeveloperCard
        name={developer.name}
        imageUrl={developer.imageUrl}
        githubUrl={developer.githubUrl}
        linkedinUrl={developer.linkedinUrl}
        twitterUrl={developer.twitterUrl}
        facebookUrl={developer.facebookUrl}
        instagramUrl={developer.instagramUrl}
      />
    </Cell>
  ));
  const operationManagersCardsArray = operationalManagers.map(developer => (
    <Cell key={developer.id} desktopColumns={3} tabletColumns={4} phoneColumns={2}>
      <DeveloperCard
        name={developer.name}
        imageUrl={developer.imageUrl}
        githubUrl={developer.githubUrl}
        linkedinUrl={developer.linkedinUrl}
        twitterUrl={developer.twitterUrl}
        facebookUrl={developer.facebookUrl}
        instagramUrl={developer.instagramUrl}
      />
    </Cell>
  ));

  return (
    <div className="mw8-ns pa2 center">
      <Grid>
        <Row>
          <Cell>
            <Headline6>
              <span className="purple">
                SIESGSTarena Alumni
              </span>
              <Body1 className="mid-gray"> People behind the chapter</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>
          {alumniCardsArray}
        </Row>
      </Grid>

      <Grid>
        <Row>
          <Cell>
            <Headline6>
              <span className="purple">
                SIESGSTarena developers
              </span>
              <Body1 className="mid-gray"> People behind this platform</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>
          {developerCardsArray}
        </Row>
      </Grid>

      <Grid>
        <Row>
          <Cell columns={12}>
            <Headline6>
              <span className="purple">
                SIESGSTarena operation managers
              </span>
              <Body1 className="mid-gray"> People behind building the operations</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>
          {operationManagersCardsArray}
        </Row>
      </Grid>

    </div>
  );
};

export default OurTeam;
