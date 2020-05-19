import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material/react-button';
import { useParams } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Headline4, Body2 } from '@material/react-typography';
import ContestDetails from '../createContest/ContestDetails';
import MessageCard from '../../common/MessageCard/index';
import { subtracting330Minutes } from '../../../commonFunctions';
import { EDIT_CONTEST } from '../../../graphql/mutations';

const EditContest = ({ contestData }) => {
  // converting data in the format which is supported by MultiSelect component
  const mappedAdmins = contestData.contestAdmin.map((admin) => ({
    label: `${admin.name} (${admin.username})`,
    value: admin._id,
  }));
  const { contestId } = useParams();
  const intialFormDetails = {
    code: contestData.code,
    type: contestData.type,
    name: contestData.name,
    description: contestData.description,
    admins: mappedAdmins,
    start: Number(subtracting330Minutes(contestData.startsAt)),
    end: Number(subtracting330Minutes(contestData.endsAt)),
    solutionVisibility: contestData.solutionVisibility,
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');

  const client = useApolloClient();

  const updateDB = async () => {
    setMessageType('loading');
    setMessage('Updating Contest, Please wait');
    const selectedAdmins = formDetails.admins.map((admin) => admin.value);

    const { data, error } = await client.mutate({
      mutation: EDIT_CONTEST,
      variables: {
        oldCode: contestId,
        code: formDetails.code,
        type: formDetails.type,
        name: formDetails.name,
        description: formDetails.description,
        startsAt: String(formDetails.start),
        endsAt: String(formDetails.end),
        contestAdmin: selectedAdmins,
        solutionVisibility: formDetails.solutionVisibility,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.editContest.success) {
      setMessageType('success');
      setMessage('Contest successfully edited');
    } else {
      setMessageType('error');
      setMessage(data.editContest.message);
    }
  };

  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mb1 mt3">Edit Contest</Headline4>
      <Body2 className="mt0 mid-gray mb4">Edit a Single Round Match or Long Queue Contest</Body2>
      <ContestDetails formDetails={formDetails} setFormDetails={setFormDetails} />
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button className="ma1 mt3" raised onClick={updateDB}>
        Edit Contest
      </Button>
    </div>
  );
};

EditContest.propTypes = {
  contestData: PropTypes.object.isRequired,
};

export default EditContest;
