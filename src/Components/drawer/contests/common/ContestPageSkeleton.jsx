import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestTabBar from './ContestTabBar';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';

const SubmissionStatus = ({ children }) => (
  <Grid className="mw9 center">
    <Row>
      <Cell desktopColumns={9} tabletColumns={8}>
        <Cell style={{ marginBottom: '10px' }}>
          <ContestTabBar />
        </Cell>
        <Cell className="">
          {children}
        </Cell>
      </Cell>
      <Cell desktopColumns={3} tabletColumns={8}>
        <Cell>
          <ContestDetails />
        </Cell>
        <Cell>
          <Announcements />
        </Cell>
      </Cell>
    </Row>
  </Grid>
);

SubmissionStatus.propTypes = {
  children: PropTypes.any.isRequired,
};

export default SubmissionStatus;
