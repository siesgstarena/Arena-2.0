import React from 'react';
import PropTypes from 'prop-types';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ContestDetails from './ContestDetails';
import Announcements from './Announcements';

const ContestPageSkeleton = ({ children, contestDetails }) => {
  const {
    name, description, endsAt, announcement,
  } = contestDetails;
  return (
    <Grid className="mw9 center">
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
