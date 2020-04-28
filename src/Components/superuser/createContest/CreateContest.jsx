import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useApolloClient } from '@apollo/react-hooks';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ContestDetails from './ContestDetails';
import MessageCard from '../../common/MessageCard/index';
import { CREATE_CONTEST } from '../../../graphql/mutations';

const CreateContest = ({ users }) => {
  const mappedUsers = users.map(admin => ({
    label: `${admin.name} (${admin.username})`,
    value: admin._id,
  }));
  const intialFormDetails = {
    code: '',
    type: String(/RATED/).substring(1).slice(0, -1),
    name: '',
    description: '',
    admins: [],
    start: new Date(),
    end: new Date(),
    solutionVisibility: String(/AFTER/).substring(1).slice(0, -1),
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  const [messageType, setMessageType] = useState('');
  const [message, setMessage] = useState('');
  const client = useApolloClient();

  const updateDB = async () => {
    setMessageType('loading');
    setMessage('Creating Contest, Please wait');
    // console.log(String(formDetails.type).substring(1).slice(0,-1));
    const selectedAdmins = formDetails.admins.map(admin => admin.value);

    const { data, error } = await client.mutate({
      mutation: CREATE_CONTEST,
      variables: {
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
    if (data.createContest.success) {
      setMessageType('success');
      setMessage('Contest successfully Created');
    } else {
      setMessageType('error');
      setMessage(data.createContest.message);
    }
  };
  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mb1 mt3">Create Contest</Headline4>
      <Body2 className="mt0 mid-gray mb4">Create a Single Round Match or Long Queue Contest</Body2>
      <ContestDetails
        formDetails={formDetails}
        setFormDetails={setFormDetails}
        adminOptions={mappedUsers}
      />
      <MessageCard
        messageType={messageType}
        message={message}
        setMessageType={setMessageType}
      />
      <Button
        className="ma1 ml0 mt3"
        raised
        onClick={updateDB}
      >
        Create Contest
      </Button>
    </div>
  );
};

CreateContest.propTypes = {
  users: PropTypes.array.isRequired,
};

export default CreateContest;
