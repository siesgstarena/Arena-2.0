import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline5 } from '@material/react-typography';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material/react-button';
import UpdateRatingsTable from './UpdateRatingsTable';
import AlertBox from '../../common/AlertBox/index';

const UpdateRatings = ({ ratingsData }) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);
  const { contestId } = useParams();

  return (
    <div className="mw7 center ma1 pa2">
      <Headline5 className="purple mt2 mb2 ml1">
        Update Ratings for
        &nbsp;
        {contestId}
      </Headline5>
      <UpdateRatingsTable ratingsData={ratingsData} />
      <Button
        className="ma1 mt3"
        style={{ marginLeft: 'auto', marginRight: 0, display: 'block' }}
        raised
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Update
      </Button>
      <AlertBox
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title="Update Confirmation"
        content="Are you sure you want to update the ratings?"
        onAccept={() => {
          history.push('/superuser/ratings/');
        }}
      />
    </div>
  );
};

UpdateRatings.propTypes = {
  ratingsData: PropTypes.array.isRequired,
};

export default UpdateRatings;
