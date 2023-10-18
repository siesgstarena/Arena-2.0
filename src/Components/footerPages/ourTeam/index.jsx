import React, { useState, useEffect } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { Headline6, Body1 } from '@material/react-typography';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import data2018 from './2018';
import data2019 from './2019';
import data2020 from './2020';
import data2021 from './2021';
import data2022 from './2022';

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

  const [curYearData, setcurYearData] = useState(data2018);

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

  useEffect(() => {
    switch (curYear) {
      case Years[2018]:
        setcurYearData(data2018);
        break;
      case Years[2019]:
        setcurYearData(data2019);
        break;
      case Years[2020]:
        setcurYearData(data2020);
        break;
      case Years[2021]:
        setcurYearData(data2021);
        break;
      case Years[2022]:
        setcurYearData(data2022);
        break;
      default:
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
              {/* <span className="purple">SIESGSTarena Alumni</span>
              <Body1 className="mid-gray"> People behind the chapter</Body1> */}
              <span className="purple">{curYearData[0].title}</span>
              <Body1 className="mid-gray">{curYearData[0].subtitle}</Body1>
            </Headline6>
          </Cell>
        </Row>
        <Row>{mapListValues(curYearData[0].data)}</Row>
      </Grid>

      {curYearData.map((year, index) => {
        if (index === 0) return null;
        return (
          <Grid key={year.title}>
            <Row>
              <Cell columns={12}>
                <Headline6>
                  <span className="purple">{year.title}</span>
                  <Body1 className="mid-gray">{year.subtitle}</Body1>
                </Headline6>
              </Cell>
            </Row>
            <Row>{mapListValues(year.data)}</Row>
          </Grid>
        );
      })}
    </div>
  );
};

export default OurTeam;
