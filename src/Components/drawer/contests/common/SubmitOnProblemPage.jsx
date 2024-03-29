import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Select, { Option } from '@material/react-select';
import { Button } from '@material/react-button';
import { useQuery } from '@apollo/client';
import { Cell, Row } from '@material/react-layout-grid';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import FileUpload from '../../../common/FileUpload/index';
import MessageCard from '../../../common/MessageCard';
import { languageOptions } from '../status/options';
import Uploading from '../submit/Uploading';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import AceEditorContext from '../../../../Contexts/AceEditorContext';
import Menu from '../../../common/Editor/menu';
import Editor from '../../../common/Editor';
import languageDefaults from '../../../common/Editor/defaults/languages';
import { GET_CONTEST_DASHBOARD } from '../../../../graphql/queries';
import Spinner from '../../../common/Spinner';
import SomethingWentWrong from '../../../common/SomethingWentWrong';
import Run from '../../../common/Editor/common/Run';
import Input from '../../../common/Editor/common/Input';
import Output from '../../../common/Editor/common/Output';
import './Style.css';
import initialState from '../../../common/Editor/defaults/initialState';

const SubmitOnProblemPage = ({ setEditorOpen }) => {
  const isMobile = window.innerWidth <= 768;
  const [editorConfig, setEditorConfig] = useState(
    initialState({ code: languageDefaults.Java, fontSize: isMobile ? 15 : 20 })
  );
  const history = useHistory();
  const { contestId } = useParams();
  const [uploadMethod, setUploadMethod] = useState('code');
  const [file, setFile] = useState({});
  const [isUploading, setIsUploading] = useState(false);
  const { redirectOnSessionExpiredAfterRender, isSessionExpired } = useSessionExpired();
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [lang, setLang] = useState(editorConfig.mode);
  const [curProblem, setcurProblem] = useState('None');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loadingRun, setLoading] = useState(false);
  useEffect(() => {
    const previousCode = localStorage.getItem(curProblem === 'None' ? contestId : curProblem);
    if (previousCode !== null) {
      const { code, language } = JSON.parse(previousCode);
      setEditorConfig({ ...editorConfig, code, mode: language });
      setLang(language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curProblem]);
  useEffect(() => {
    localStorage.setItem(
      curProblem === 'None' ? contestId : curProblem,
      JSON.stringify({
        code: editorConfig.code,
        language: editorConfig.mode,
        problem: curProblem,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [curProblem, editorConfig.code, editorConfig.mode]);
  let problems = [];
  let problemOptions = [{ value: 'None', label: 'Choose Problem' }];
  const { loading, error, data } = useQuery(GET_CONTEST_DASHBOARD, {
    variables: { code: contestId },
  });
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data.dashboard) {
    problems = data.dashboard;

    const incomingProblemOptions = problems.map((problemOption) => ({
      value: problemOption.problemDetails.code,
      label: `${problemOption.problemDetails.code}`,
    }));
    problemOptions = [...problemOptions, ...incomingProblemOptions];
  }
  const submitFile = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('file', file);
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/contest/${contestId}/submit/${curProblem}`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (isSessionExpired(jsonResponse.data.restAPI)) {
          redirectOnSessionExpiredAfterRender();
          return;
        }
        if (jsonResponse.data.restAPI.success === true) {
          history.push({
            pathname: `/contests/${contestId}/my`,
          });
          setIsUploading(false);
          setEditorOpen(false);
        } else {
          setIsUploading(false);
          setEditorOpen(false);
          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      })
      .catch(() => {
        setIsUploading(false);
        setEditorOpen(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };

  const submitCode = () => {
    const formData = new FormData();
    formData.append('language', lang);
    formData.append('code', editorConfig.code);
    formData.append('problemCode', curProblem);
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
          setIsUploading(false);
          setEditorOpen(false);
        } else {
          setIsUploading(false);
          setEditorOpen(false);

          setMessageType('error');
          setMessage(jsonResponse.data.restAPI.message);
        }
      })
      .catch(() => {
        setIsUploading(false);
        setEditorOpen(false);
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };
  // function to check validation
  const validationCheck = () => {
    if (
      lang !== 'None' &&
      curProblem !== 'None' &&
      (file.length !== 0 || editorConfig.code.length !== 0)
    ) {
      setIsUploading(true);
      if (uploadMethod === 'file') {
        submitFile();
      } else {
        submitCode();
      }
    } else {
      setMessageType('error');
      setMessage('Please select appropriate Language/Upload/Problem method and Upload valid file');
    }
  };

  // function to render loading page / the submit page
  if (isUploading) {
    return <Uploading />;
  }
  return (
    <AceEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      <Box className="w-100">
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </Box>
      <Box className="menu-row menu-mobile set-aside">
        <Box className="language-type">
          <Box className="basic-option">
            <Select
              notchedOutlineClassName="pt2 pb2"
              required
              label="Language"
              outlined
              className="mw-120"
              value={lang}
              options={languageOptions}
              onChange={(e) => {
                setLang(e.target.value);
                setEditorConfig({
                  ...editorConfig,
                  mode: e.target.value,
                  code: languageDefaults[e.target.value],
                });
              }}
            />
          </Box>
          <Box className="basic-option">
            <Select
              required
              notchedOutlineClassName="pt2 pb2"
              label="Type"
              outlined
              value={uploadMethod}
              onChange={(e) => {
                setUploadMethod(e.target.value);
              }}
              className="mw-120"
            >
              <Option value="file">File</Option>
              <Option value="code">Code</Option>
            </Select>
          </Box>
        </Box>
        <Box className="problem-setting">
          <Box className="basic-option">
            <Select
              notchedOutlineClassName="pt2 pb2"
              required
              label="Problem"
              className="mw-120 choose-problem"
              outlined
              value={curProblem}
              options={problemOptions}
              onChange={(e) => setcurProblem(e.target.value)}
            />
          </Box>
          {uploadMethod === 'code' && (
            <Box className="mw-120-menu settings-btn">
              <Menu input={input} lang={lang} />
            </Box>
          )}
        </Box>
      </Box>

      {uploadMethod === 'file' ? (
        <Box className="mt2">
          <FileUpload
            id="file"
            label="Upload Solution"
            file={file}
            onChangeFunction={(e) => setFile(e.currentTarget.files[0])}
          />
        </Box>
      ) : (
        <Editor />
      )}
      <Box className="submit-btn-row">
        <Button
          raised
          outlined
          className="submit-btn"
          onClick={() => {
            validationCheck();
          }}
          disabled={loadingRun}
        >
          Submit
        </Button>
        {uploadMethod === 'code' && (
          <Run
            input={input}
            lang={lang}
            setOutput={setOutput}
            setLoading={setLoading}
            loading={loadingRun}
            setMessage={setMessage}
            setMessageType={setMessageType}
          />
        )}
      </Box>
      {uploadMethod === 'code' && (
        <Row className="input-output-row">
          <Cell className="input-card-row">
            <Input input={input} setInput={setInput} />
          </Cell>
          <Cell className="input-card-row">
            <Output loading={loadingRun} output={output} setOutput={setOutput} />
          </Cell>
        </Row>
      )}
    </AceEditorContext.Provider>
  );
};
SubmitOnProblemPage.propTypes = {
  setEditorOpen: PropTypes.func,
};
export default SubmitOnProblemPage;
