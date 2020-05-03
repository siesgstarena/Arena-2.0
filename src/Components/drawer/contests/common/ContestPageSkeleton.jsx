import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';
import Submit from './SubmitOnProblemPage';

const ContestPageSkeleton = ({ children, contestDetails }) => {
  const {
    name, description, endsAt, announcement,
  } = contestDetails;

  return (
    <Grid className="">
      <Row>
        <Cell desktopColumns={9} tabletColumns={8}>
          <Cell>
            {children}
          </Cell>
        </Cell>
        <Cell desktopColumns={3} tabletColumns={8}>
          <Cell>
            <ContestDetails name={name} description={description} endsAt={endsAt} />
          </Cell>
          <Cell>
            <Announcements announcement={announcement} />
          </Cell>
          <Cell>
            <Route path="/contests/:contestId/problem/:problemId" exact component={Submit} />
          </Cell>
        </Cell>
      </Row>
    </Grid>
  );
};

ContestPageSkeleton.propTypes = {
  children: PropTypes.any.isRequired,
  contestDetails: PropTypes.object.isRequired,
};

export default ContestPageSkeleton;
