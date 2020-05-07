import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import PropTypes from 'prop-types';
import ProblemDetails from '../createProblem/ProblemDetails';
import MessageCard from '../../common/MessageCard/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import useSentry from '../../../customHooks/useSentry';

const EditProblemForm = ({ intialFormDetails }) => {
  const { contestId, problemId } = useParams();
  const history = useHistory();
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  const [messageType, setMessageType] = useState('');
  const { logError } = useSentry();
  const [message, setMessage] = useState('');
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const handleEditProblem = () => {
    setMessage('Editing Problem, Please wait');
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
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/${contestId}/${problemId}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then(response => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
          return;
        }
        if (jsonResponse.data.restAPI.success === true) {
          history.push({
            pathname: `/admin/${contestId}`,
            state: {
              snackbarMessage: 'Problem Edited successfully',
            },
          });
        } else {
          logError('REST APT, editProblem', { ...jsonResponse.data });
          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      }).catch((error) => {
        logError('REST APT, editProblem', { ...error });
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };
  return (
    <div className="mw7 center pa2">
      <Headline4 className="ma0 mt3 purple mb1">Edit Problem</Headline4>
      <Body2 className="ma0 ml1  mid-gray mb4">
        Edit Problem -
        &nbsp;
        {problemId}
      </Body2>
      <ProblemDetails formDetails={formDetails} setFormDetails={setFormDetails} />
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button raised onClick={handleEditProblem}>
        Edit Problem
      </Button>
    </div>
  );
};

EditProblemForm.propTypes = {
  intialFormDetails: PropTypes.object.isRequired,
};

export default EditProblemForm;
