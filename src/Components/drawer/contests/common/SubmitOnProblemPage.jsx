import React, { useState } from 'react';
import { Body1 } from '@material/react-typography';
import { useHistory, useParams, useLocation } from 'react-router-dom';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';
import { Button } from '@material/react-button';
import Card from '@material/react-card';
import FileUpload from '../../../common/FileUpload/index';
import MessageCard from '../../../common/MessageCard';
import { languageOptions } from '../status/options';
import Uploading from '../submit/Uploading';
import useSessionExpired from '../../../../customHooks/useSessionExpired';

const SubmitOnProblemPage = () => {
// initial State declaration
  const history = useHistory();
  const { contestId } = useParams();
  const location = useLocation();
  // Getting the problemId from the location.
  // Here we cannot use useParams to get the problemId because this component
  // is the child of ContestPageSkeleton which is matched with url /contests/:contestId
  // and thuse it does not have problemId as a param
  const problemId = location.pathname.split('/problem/')[1];
  const [uploadMethod, setUploadMethod] = useState('file');
  const [lang, setLang] = useState('None');
  const [file, setFile] = useState({});
  const [code, setCode] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const submitFile = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('file', file);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/contest/${contestId}/submit/${problemId}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then(response => response.json())
      .then((jsonResponse) => {
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
        }
        if (jsonResponse.data.restAPI.success === true) {
          history.push({
            pathname: `/contests/${contestId}/my`,
          });
        } else {
          setIsUploading(false);
          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      }).catch(() => {
        setIsUploading(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };

  const submitCode = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('code', code);
    formData.append('problemCode', problemId);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/contest/${contestId}/submit`, {
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
            pathname: `/contests/${contestId}/my`,
          });
        } else {
          setIsUploading(false);
          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      }).catch(() => {
        setIsUploading(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };
  // functions to update state
  const onLangChange = (_, item) => (setLang(item.getAttribute('data-value')));

  const onMethodChange = (_, item) => (setUploadMethod(item.getAttribute('data-value')));
  // function to check validation
  const validationCheck = () => {
    if (lang !== 'None' && (file.length !== 0 || code.length !== 0)) {
      setIsUploading(true);
      if (uploadMethod === 'file') {
        submitFile();
      } else {
        submitCode();
      }
    } else {
      setMessageType('error');
      setMessage('Please select appropriate Language/Upload method and Upload valid file');
    }
  };

  // function to render loading page / the submit page
  if (isUploading) {
    return (
      <Card className="pa3 mt3">
        <Uploading />
      </Card>
    );
  }
  return (
    <Card className="pa3 mt3">
      {/* form to get details of language, upload option and answer */}
      <Body1 className="tc mt1 mb1">Submit Solution</Body1>
      <hr className="mid-gray w-100 h-100" />
      <div className="w-100">
        <MessageCard
          message={message}
          messageType={messageType}
          setMessageType={setMessageType}
        />
      </div>
      <div className="" style={{ overflow: 'hidden' }}>
        <Select
          notchedOutlineClassName="pt2 pb2"
          required
          label="Language"
          enhanced
          outlined
          className="w-100"
          value={lang}
          options={languageOptions}
          onEnhancedChange={onLangChange}
        />
      </div>
      <div className="" style={{ overflow: 'hidden' }}>
        <Select
          required
          notchedOutlineClassName="pt2 pb2"
          label="Upload Type"
          enhanced
          outlined
          className="w-100"
          value={uploadMethod}
          onEnhancedChange={onMethodChange}
        >
          <Option value="file">Upload Source File</Option>
          <Option value="code">Insert Source Code</Option>
        </Select>
      </div>
      {
      (uploadMethod === 'file')
        ? (
          <div className="mt2">
            <FileUpload id="file" label="Upload Solution" file={file} onChangeFunction={e => setFile(e.currentTarget.files[0])} />
          </div>
        )
        : (
          <div className=" mt2 mb1">
            <TextField
              label="Enter your code here"
              className="text-area-width-100"
              textarea
              required
            >
              <Input
                className=""
                rows="10"
                value={code}
                onChange={e => setCode(e.currentTarget.value)}
              />
            </TextField>
          </div>
        )
    }
      <Button
        raised
        className="mt1"
        onClick={() => { validationCheck(); }}
      >
        Submit
      </Button>
    </Card>
  );
};

export default SubmitOnProblemPage;
