import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ProblemsTable from './ProblemsTable';
import SubmissionDetails from './SubmissionDetails';
import ContestDetails from './ContestDetails';
import ContestTabBar from './ContestTabBar';
import Announcements from './Announcements';
import 'tachyons';

const ContestPage = (props) => {
  const { location } = props;
  const { pathname } = location;

  return (
    <Grid className="mw9 center">
      <Row>
        <Cell desktopColumns={9} tabletColumns={8}>
          <Cell>
            <ContestTabBar props={props} />
          </Cell>
          <Cell className="">
            <ProblemsTable pathname={pathname} />
          </Cell>
          <Cell>
            <SubmissionDetails />
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
};

ContestPage.propTypes = {
  location: PropTypes.object.isRequired,
};


export default ContestPage;
