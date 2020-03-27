import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Select, { Option } from '@material/react-select';
import { Headline4, Body2 } from '@material/react-typography';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import FileUpload from '../../common/FileUpload/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';

const TestProblem = () => {
  const [language, setLanguage] = useState('C');
  const { contestId, problemId } = useParams();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const [solutionFile, setSolutionFile] = useState({});
  const onLanguageChange = (index, item) => (
    setLanguage(item.getAttribute('data-value'))
  );
  const onFileChange = (event) => {
    setSolutionFile(event.target.files[0]);
  };
  const handleTestProblem = () => {
    setMessage('Testing Problem, Please wait');
    setMessageType('loading');
    const formData = new FormData();
    formData.append('file', solutionFile);
    formData.append('language', language);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/admin/${contestId}/${problemId}/test`, {
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
          setMessageType('success');
          setMessage(jsonResponse.data.restAPI.message);
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
    <div className="mw7 center">
      <Headline4 className="purple mt4 ma0 mb1"> Test Problem</Headline4>
      <Body2 className="ma0 ml1  mid-gray mb4">
        Upload solution file to test the problem
        &nbsp;
        -
        &nbsp;
        {problemId}
      </Body2>
      <Select
        className="w-100"
        notchedOutlineClassName="pa1"
        enhanced
        outlined
        label="Select Language"
        value={language}
        onEnhancedChange={onLanguageChange}
      >
        <Option value="C">C</Option>
        <Option value="C++">C++</Option>
        <Option value="C++ 14">C++ 14</Option>
        <Option value="java">Java</Option>
        <Option value="javascript">Javascript</Option>
        <Option value="python2">Python 2</Option>
        <Option value="python3">Python 3</Option>
      </Select>
      <div className="ma1 mt3">
        <FileUpload
          id="solution-file-upload"
          label="Upload solution file"
          onChangeFunction={onFileChange}
          file={solutionFile}
        />
      </div>
      <MessageCard messageType={messageType} message={message} setMessageType={setMessageType} />
      <Button className="ma1 mb5" onClick={handleTestProblem} raised>
        Test Problem
      </Button>
    </div>
  );
};

export default TestProblem;
