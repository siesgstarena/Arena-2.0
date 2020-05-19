import React, { useState } from 'react';
import Select from '@material/react-select';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';

const SuperuserRatings = ({ contests }) => {
  const history = useHistory();
  const [contest, setContest] = useState(contests[0].code);
  const onContestChange = (index, item) => setContest(item.getAttribute('data-value'));

  const contestOptions = contests.map((contestOption) => ({
    value: contestOption.code,
    label: `${contestOption.name} (${contestOption.code})`,
  }));

  return (
    <div className="mw7 center ma1">
      <Headline4 className="purple mt4 mb0 ml1"> Update Ratings</Headline4>
      <Body2 className="mid-gray mt2 mb4 ml1">
        Ratings will be changed using Elo Ratings Algorithm
      </Body2>
      <Select
        className="w-100"
        notchedOutlineClassName="pa1"
        enhanced
        outlined
        label="Select Contest"
        value={contest}
        options={contestOptions}
        onEnhancedChange={onContestChange}
      />
      <Button
        className="ma1 mt3 mb5"
        raised
        onClick={() => history.push(`/superuser/ratings/${contest}/update`)}
      >
        Update
      </Button>
    </div>
  );
};

SuperuserRatings.propTypes = {
  contests: PropTypes.array.isRequired,
};

export default SuperuserRatings;
