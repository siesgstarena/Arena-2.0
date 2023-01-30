import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline6, Body1 } from '@material/react-typography';

import { Tab, Tabs, AppBar } from '@material-ui/core';

import {
  alumni as alumni2018,
  developers as developers2018,
  operationalManagers as operationalManagers2018,
} from './2018';
import {
  alumni as alumni2019,
  developers as developers2019,
  operationalManagers as operationalManagers2019,
} from './2019';
import {
  alumni as alumni2020,
  developers as developers2020,
  operationalManagers as operationalManagers2020,
} from './2020';
import {
  alumni as alumni2021,
  developers as developers2021,
  operationalManagers as operationalManagers2021,
} from './2021';
import {
  alumni as alumni2022,
  developers as developers2022,
  operationalManagers as operationalManagers2022,
} from './2022';
import MemberCard from './MemberCard';
import 'tachyons';
import './Style.css';

const OurTeam = () => {
  const Years = Object.freeze({
    2018: '2018',
    2019: '2019',
    2020: '2020',
    2021: '2021',
    2022: '2022',
  });

  const [curYear, setcurYear] = useState(Years[2018]);

  const mapListValues = (list) => {
    return list.map((developer) => {
      if (developer.id) {
        return (
          <Cell
            key={`${developer.id}${curYear}`}
            desktopColumns={3}
            tabletColumns={4}
            phoneColumns={2}
          >
            <MemberCard
              key={`${developer.id}${curYear}`}
              name={developer.name}
              imageUrl={developer.imageUrl}
              githubUrl={developer.githubUrl}
              linkedinUrl={developer.linkedinUrl}
              twitterUrl={developer.twitterUrl}
              facebookUrl={developer.facebookUrl}
              instagramUrl={developer.instagramUrl}
            />
          </Cell>
        );
      }
      return null;
    });
  };

  const [alumniCardsArray, setalumniCardsArray] = useState(mapListValues(alumni2018));
  const [developerCardsArray, setdeveloperCardsArray] = useState(
    mapListValues(mapListValues(developers2018))
  );
  const [operationManagersCardsArray, setoperationManagersCardsArray] = useState(
    mapListValues(operationalManagers2018)
  );

  useEffect(() => {
    switch (curYear) {
      case Years[2018]:
        setalumniCardsArray(mapListValues(alumni2018));
        setdeveloperCardsArray(mapListValues(developers2018));
        setoperationManagersCardsArray(mapListValues(operationalManagers2018));
        break;
      case Years[2019]:
        setalumniCardsArray(mapListValues(alumni2019));
        setdeveloperCardsArray(mapListValues(developers2019));
        setoperationManagersCardsArray(mapListValues(operationalManagers2019));
        break;
      case Years[2020]:
        setalumniCardsArray(mapListValues(alumni2020));
        setdeveloperCardsArray(mapListValues(developers2020));
        setoperationManagersCardsArray(mapListValues(operationalManagers2020));
        break;
      case Years[2021]:
        setalumniCardsArray(mapListValues(alumni2021));
        setdeveloperCardsArray(mapListValues(developers2021));
        setoperationManagersCardsArray(mapListValues(operationalManagers2021));
        break;
      case Years[2022]:
        setalumniCardsArray(mapListValues(alumni2022));
        setdeveloperCardsArray(mapListValues(developers2022));
        setoperationManagersCardsArray(mapListValues(operationalManagers2022));
        break;
      default:
        setalumniCardsArray(mapListValues(alumni2018));
        setdeveloperCardsArray(mapListValues(developers2018));
        setoperationManagersCardsArray(mapListValues(operationalManagers2018));
        break;
    }
  }, [curYear]);

  const change = (e, year) => {
    e.preventDefault();

    setcurYear(year);
  };

  return (
    <div className="mw8-ns pa2 center purple">
      <Grid className="purple">
        <Row className="purple">
          <Cell>
            <Headline6>
              <AppBar className="purple mb1 team-nav" position="static">
                <Tabs
                  onChange={(e, y) => change(e, y)}
                  value={curYear}
                  variant="scrollable"
                  scrollButtons="on"
                  aria-label="scrollable auto tabs example"
                  className="team-nav"
                >
                  <Tab label="2018-19" value={Years[2018]} />
                  <Tab label="2019-20" value={Years[2019]} />
                  <Tab label="2020-21" value={Years[2020]} />
                  <Tab label="2021-22" value={Years[2021]} />
                  <Tab label="2022-23" value={Years[2022]} />
                </Tabs>
              </AppBar>
              <span className="purple">SIESGSTarena Alumni</span>
              <Body1 className="mid-gray"> People behind the chapter</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>{alumniCardsArray}</Row>
      </Grid>

      <Grid>
        <Row>
          <Cell>
            <Headline6>
              <span className="purple">SIESGSTarena developers</span>
              <Body1 className="mid-gray"> People behind this platform</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>{developerCardsArray}</Row>
      </Grid>

      <Grid>
        <Row>
          <Cell columns={12}>
            <Headline6>
              <span className="purple">SIESGSTarena operation managers</span>
              <Body1 className="mid-gray"> People behind building the operations</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>{operationManagersCardsArray}</Row>
      </Grid>
    </div>
  );
};

export default OurTeam;
