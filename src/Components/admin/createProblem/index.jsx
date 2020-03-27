/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '@material/react-button';
import { Headline4, Body2 } from '@material/react-typography';
import ProblemDetails from './ProblemDetails';
import MessageCard from '../../common/MessageCard/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const CreateProblem = () => {
  const { contestId } = useParams();
  const history = useHistory();
  const [message, setMessage] = useState('');
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const [messageType, setMessageType] = useState('');
  const intialFormDetails = {
    code: '',
    points: '',
    name: '',
    description: '',
    input: '',
    output: '',
    constraints: '',
    examples: '',
    explanation: '',
    inputFile: {},
    outputFile: {},
    tags: '',
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  const handleCreateProblem = () => {
    setMessage('Creating Problem, Please wait');
    setMessageType('loading');
    const formData = new FormData();
    formData.append('code', formDetails.code);
    formData.append('points', formDetails.points);
    formData.append('name', formDetails.name);
    formData.append('description', formDetails.description);
    formData.append('explainInput', formDetails.input);
    formData.append('explainOutput', formDetails.output);
    formData.append('constraints', formDetails.constraints);
    formData.append('example', formDetails.examples);
    formData.append('explanation', formDetails.explanation);
    formData.append('tags', formDetails.tags);
    formData.append('inputFile', formDetails.inputFile);
    formData.append('outputFile', formDetails.outputFile);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/${contestId}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then(response => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
        }
        if (jsonResponse.data.restAPI.success === true) {
          history.push({
            pathname: `/admin/${contestId}`,
            state: {
              snackbarMessage: 'Problem created successfully',
            },
          });
        } else {
          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      }).catch(() => {
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };

  return (
    <div className="mw7 center pa2">
      <Headline4 className="ma0 mt3 purple mb1">Create Problem</Headline4>
      <Body2 className="ma0 ml1  mid-gray mb4">
        Create Problem for
        &nbsp;
        {contestId}
      </Body2>
      <ProblemDetails formDetails={formDetails} setFormDetails={setFormDetails} />
      <MessageCard messageType={messageType} message={message} />
      <Button raised onClick={handleCreateProblem}>
          Create Problem
      </Button>
    </div>
  );
};

export default CreateProblem;
