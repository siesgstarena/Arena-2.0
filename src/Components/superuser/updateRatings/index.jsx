import React, { useState } from 'react';
import { Headline5 } from '@material/react-typography';
import { useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import UpdateRatingsTable from './UpdateRatingsTable';
import AlertBox from '../../common/AlertBox/index';

const UpdateRatings = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mw7 center ma1 pa2">
      <Headline5 className="purple mt2 mb2 ml1"> Update Ratings for Single Round Match #08 </Headline5>
      <UpdateRatingsTable />
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

export default UpdateRatings;
