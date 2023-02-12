import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline4 } from '@material/react-typography';
import coders from './assets/coders.jpg';
import coders1 from './assets/coders1.jpg';
import ContestCard from './ContestCard';

const Competitions = () => {
  document.title = 'SIESGSTarena | Competitions';
  const contests = [
    {
      name: 'BUG4EVER',
      details:
        'A team programming competition - you pick your team and make your way to finals via Qualifiers. Are you up for solving competitive bugs?',
      date: 'Registration: July 2019',
    },
    {
      name: 'TURING CUP',
      details:
        'Put your skills to the test by solving algorithmic puzzles for winning the Turing Cup. Do you have what it takes? ',
      date: 'Registration: January 2019',
    },
  ];

  return (
    <Grid className="mw7 center">
      <Row>
        <Cell className="" desktopColumns={6} phoneColumns={4} tabletColumns={4}>
          <Headline4 className="mb5 purple"> SIESGSTarena&apos;s Coding Competitions </Headline4>
          <ContestCard
            contestImage={coders}
            contestName={contests[0].name}
            contestDetails={contests[0].details}
            contestDate={contests[0].date}
          />
        </Cell>
        <Cell desktopColumns={6} phoneColumns={4} tabletColumns={4}>
          <ContestCard
            contestImage={coders1}
            contestName={contests[1].name}
            contestDetails={contests[1].details}
            contestDate={contests[1].date}
          />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Competitions;
