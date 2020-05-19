import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import { useHistory, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';
import { Button } from '@material/react-button';
import FileUpload from '../../../common/FileUpload/index';
import MessageCard from '../../../common/MessageCard';
import { languageOptions } from '../status/options';
import Uploading from './Uploading';
import useSessionExpired from '../../../../customHooks/useSessionExpired';

const SubmitSolution = ({ problems }) => {
  // initial State declaration
  const [problem, setProblem] = useState('None');
  const history = useHistory();
  const { contestId } = useParams();
  const [uploadMethod, setUploadMethod] = useState('file');
  const [lang, setLang] = useState('None');
  const [file, setFile] = useState({});
  const [code, setCode] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  let problemOptions = [{ value: 'None', label: 'Choose Problem' }];
  const incomingProblemOptions = problems.map((problemOption) => ({
    value: problemOption.code,
    label: `${problemOption.name} (${problemOption.code})`,
  }));
  problemOptions = [...problemOptions, ...incomingProblemOptions];

  const submitFile = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('file', file);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/contest/${contestId}/submit/${problem}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then((response) => response.json())
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
      })
      .catch(() => {
        setIsUploading(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };

  const submitCode = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('code', code);
    formData.append('problemCode', problem);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/contest/${contestId}/submit`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then((response) => response.json())
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
      })
      .catch(() => {
        setIsUploading(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };
  // functions to update state
  const onEnhancedChange = (_, item) => setProblem(item.getAttribute('data-value'));

  const onLangChange = (_, item) => setLang(item.getAttribute('data-value'));

  const onMethodChange = (_, item) => setUploadMethod(item.getAttribute('data-value'));
  // function to check validation
  const validationCheck = () => {
    if (problem !== 'None' && lang !== 'None' && (file.length !== 0 || code.length !== 0)) {
      setIsUploading(true);
      if (uploadMethod === 'file') {
        submitFile();
      } else {
        submitCode();
      }
    } else {
      setMessageType('error');
      setMessage('Please select appropriate Problem/Language/Upload method and Upload valid file');
    }
  };

  // function to render loading page / the submit page
  if (isUploading) {
    return <Uploading />;
  }
  return (
    <div className="">
      {/* form to get details of problem id, language, upload option and answer */}
      <Grid style={{ padding: '0px' }}>
        <Row>
          <Cell tabletColumns="8" desktopColumns="12">
            <div className="w-100">
              <MessageCard
                message={message}
                messageType={messageType}
                setMessageType={setMessageType}
              />
            </div>
          </Cell>
        </Row>
        <Row>
          <Cell tabletColumns="5">
            <div className="" style={{ overflow: 'hidden' }}>
              <Select
                required
                notchedOutlineClassName="pt2 pb2"
                enhanced
                outlined
                label="Problem"
                className="w-100"
                value={problem}
                options={problemOptions}
                onEnhancedChange={onEnhancedChange}
              />
            </div>
          </Cell>
          <Cell tabletColumns="3">
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
          </Cell>
          <Cell tabletColumns="9">
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
          </Cell>
        </Row>
        <Row>
          <Cell desktopColumns="12" tabletColumns="9" phoneColumns="5">
            {uploadMethod === 'file' ? (
              <div className="mt3">
                <FileUpload
                  id="file"
                  label="Upload Solution"
                  file={file}
                  onChangeFunction={(e) => setFile(e.currentTarget.files[0])}
                />
              </div>
            ) : (
              <div className=" mt3 mb1">
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
                    onChange={(e) => setCode(e.currentTarget.value)}
                  />
                </TextField>
              </div>
            )}
          </Cell>
        </Row>
        <Row>
          <Cell>
            <Button
              raised
              className="mt2"
              onClick={() => {
                validationCheck();
              }}
            >
              Submit
            </Button>
          </Cell>
        </Row>
      </Grid>
    </div>
  );
};

SubmitSolution.propTypes = {
  problems: PropTypes.array.isRequired,
};

export default SubmitSolution;
