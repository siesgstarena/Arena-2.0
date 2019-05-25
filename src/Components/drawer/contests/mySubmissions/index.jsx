import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import SubmissionStatusTable from './SubmissionStatusTable';
import ContestDetails from '../contestPage/ContestDetails';
import Announcements from '../contestPage/Announcements';
import 'tachyons';

const ContestPage = (props) => {
  const { location } = props;
  const { pathname } = location;
  const { match } = props;
  const { params } = match;
  const { id: contestId } = params;
  return (
    <Grid className="mw9 center">
      <Row>
        <Cell desktopColumns={9} tabletColumns={8}>
          <Cell className="">
            <SubmissionStatusTable pathname={pathname} contestId={contestId} />
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
  match: PropTypes.object.isRequired,
};


export default ContestPage;
