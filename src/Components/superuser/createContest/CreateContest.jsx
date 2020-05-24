import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import ContestDetails from './ContestDetails';
import MessageCard from '../../common/MessageCard/index';
import { CREATE_CONTEST } from '../../../graphql/mutations';
import { GET_CONTEST_HOMEPAGE_DETAILS, GET_ALL_CONTEST_DETAILS } from '../../../graphql/queries';
import superuserContestsLimit from '../../../constants';

const CreateContest = () => {
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
  const history = useHistory();

  const updateDB = async () => {
    setMessageType('loading');
    setMessage('Creating Contest, Please wait');
    const selectedAdmins = formDetails.admins.map((admin) => admin.value);

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
      refetchQueries: [
        {
          query: GET_CONTEST_HOMEPAGE_DETAILS,
        },
        {
          query: GET_ALL_CONTEST_DETAILS,
          variables: { skip: 0, limit: superuserContestsLimit },
        },
      ],
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (data.createContest.success) {
      history.push({
        pathname: `/admin/${formDetails.code}`,
        state: {
          snackbarMessage: 'Contest Successfully Created',
        },
      });
    } else {
      setMessageType('error');
      setMessage(data.createContest.message);
    }
  };
  return (
    <div className="mw7 center pa2">
      <Headline4 className="purple mb1 mt3">Create Contest</Headline4>
      <Body2 className="mt0 mid-gray mb4">Create a Single Round Match or Long Queue Contest</Body2>
      <ContestDetails formDetails={formDetails} setFormDetails={setFormDetails} />
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button className="ma1 ml0 mt3" raised onClick={updateDB}>
        Create Contest
      </Button>
    </div>
  );
};

export default CreateContest;
