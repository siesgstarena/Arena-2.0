import React, { useState } from 'react';
import Tab from '@material/react-tab';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TabBar from '@material/react-tab-bar';

const ContestTabBar = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleActiveIndexUpdate = (updatedActiveIndex) => {
    setActiveIndex(updatedActiveIndex);
  };

  const { history } = props;
  const { match } = props;
  const { url } = match;

  const onTabClick = (path) => {
    history.push(path);
  };

  // In this case the Link tag was not working.
  // So I have changed the routes using onClick event.
  // When the user clicks on a tab, the url is passed
  // and then we update the site according to it.
  return (
    <Grid className="mw9 center">
      <Row>
        <Cell desktopColumns={9} tabletColumns={8}>
          <div className="">
            <TabBar
              className=""
              activeIndex={activeIndex}
              handleActiveIndexUpdate={handleActiveIndexUpdate}
            >
              <Tab onClick={() => onTabClick(`${url}`)}>
                <span className="mdc-tab__text-label">Dashboard</span>
              </Tab>
              <Tab onClick={() => onTabClick(`${url}/status`)}>
                <span className="mdc-tab__text-label">Status</span>
              </Tab>
              <Tab onClick={() => onTabClick(`${url}/my`)}>
                <span className="mdc-tab__text-label">My Submissions</span>
              </Tab>
              <Tab onClick={() => onTabClick(`${url}/scoreboard`)}>
                <span className="mdc-tab__text-label">Scoreboard</span>
              </Tab>
              <Tab onClick={() => onTabClick(`${url}/submit`)}>
                <span className="mdc-tab__text-label">Submit</span>
              </Tab>
            </TabBar>
          </div>
        </Cell>
      </Row>
    </Grid>
  );
};

ContestTabBar.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

export default ContestTabBar;
