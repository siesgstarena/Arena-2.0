import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { Headline4, Body2 } from '@material/react-typography';
import ContestDetails from '../createContest/ContestDetails';
import { subtracting330Minutes } from '../../../commonFunctions';

const EditContest = ({ contestData, users }) => {
  const mappedAdmins = contestData.contestAdmin.map(admin => ({
    label: `${admin.name} (${admin.username})`,
    value: admin._id,
  }));
  const mappedUsers = users.map(admin => ({
    label: `${admin.name} (${admin.username})`,
    value: admin._id,
  }));
  const intialFormDetails = {
    code: contestData.code,
    type: 'round',
    name: contestData.name,
    description: contestData.description,
    admins: mappedAdmins,
    start: Number(subtracting330Minutes(contestData.startsAt)),
    end: Number(subtracting330Minutes(contestData.endsAt)),
    solutionVisibility: contestData.solutionVisibility,
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mb1 mt3">Edit Contest</Headline4>
      <Body2 className="mt0 mid-gray mb4">Edit a Single Round Match or Long Queue Contest</Body2>
      <ContestDetails
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        adminOptions={mappedUsers}
      />
      <Button
        className="ma1 mt3"
        raised
      >
        Edit Contest
      </Button>
    </div>
  );
};

EditContest.propTypes = {
  users: PropTypes.array.isRequired,
  contestData: PropTypes.object.isRequired,
};

export default EditContest;
