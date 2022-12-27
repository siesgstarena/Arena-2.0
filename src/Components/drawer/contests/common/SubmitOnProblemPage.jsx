import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Select, { Option } from '@material/react-select';
import { Button } from '@material/react-button';
import Card from '@material/react-card';
import { useQuery } from 'react-apollo';
import { Cell, Row } from '@material/react-layout-grid';
import { TextField } from '@material-ui/core';
import FileUpload from '../../../common/FileUpload/index';
import MessageCard from '../../../common/MessageCard';
import { languageOptions } from '../status/options';
import Uploading from '../submit/Uploading';
import useSessionExpired from '../../../../customHooks/useSessionExpired';
import AceEditorContext from '../../../../Contexts/AceEditorContext';
import Menu from '../../../editor/menu';
import Editor from '../../../editor';
import languageDefaults from '../../../editor/defaults/languages';
import { GET_CONTEST_DASHBOARD } from '../../../../graphql/queries';
import Spinner from '../../../common/Spinner';
import SomethingWentWrong from '../../../common/SomethingWentWrong';

const SubmitOnProblemPage = () => {
  // initial State declaration
  const [editorConfig, setEditorConfig] = useState({
    theme: 'github',
    mode: 'Java',
    fontSize: 20,
    showLineNumbers: true,
    showGutter: true,
    highlightActiveLine: true,
    code: languageDefaults.Java,
    readOnly: false,
    showPrintMargin: false,
    tabSize: 4,
    wrapEnabled: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: true,
    enableSnippets: true,
  });
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
  const onProblemChange = (_, item) => setcurProblem(item.getAttribute('data-value'));

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
  const onLangChange = (_, item) => {
    setLang(item.getAttribute('data-value'));
    setEditorConfig({
      ...editorConfig,
      mode: item.getAttribute('data-value'),
      code: languageDefaults[item.getAttribute('data-value')],
    });
  };

  const onMethodChange = (_, item) => setUploadMethod(item.getAttribute('data-value'));
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
  const runCode = () => {
    fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/code/run`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({
        code: editorConfig.code,
        language: lang,
        input,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((jsonResponse) => {
        if (jsonResponse && jsonResponse.status === false) {
          setMessageType('error');
          setMessage(jsonResponse.message);
        } else {
          setOutput(jsonResponse);
        }
      })
      .catch(() => {
        setMessageType('error');
        setMessage('An unexpected error has been encountered');
      });
  };
  const validateRun = () => {
    if (lang !== 'None' && editorConfig.code.length !== 0) {
      runCode();
    } else {
      setMessageType('error');
      setMessage('Please select appropriate Language');
    }
  };
  // function to render loading page / the submit page
  if (isUploading) {
    return (
      <Card className="mt3">
        <Uploading />
      </Card>
    );
  }
  return (
    <AceEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      <div className="w-100">
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          flexWrap: 'wrap',
        }}
      >
        <div className="" style={{ overflow: 'hidden', marginRight: '1rem' }}>
          <Select
            notchedOutlineClassName="pt2 pb2"
            required
            label="Language"
            enhanced
            outlined
            value={lang}
            options={languageOptions}
            onEnhancedChange={onLangChange}
          />
        </div>
        <div className="" style={{ overflow: 'hidden', marginRight: '1rem' }}>
          <Select
            required
            notchedOutlineClassName="pt2 pb2"
            label="Type"
            enhanced
            outlined
            value={uploadMethod}
            onEnhancedChange={onMethodChange}
          >
            <Option value="file">File</Option>
            <Option value="code">Code</Option>
          </Select>
        </div>
        <div className="" style={{ overflow: 'hidden' }}>
          <Select
            notchedOutlineClassName="pt2 pb2"
            required
            label="Problem"
            enhanced
            outlined
            value={curProblem}
            options={problemOptions}
            onEnhancedChange={onProblemChange}
          />
        </div>
        {uploadMethod === 'code' && <Menu input={input} lang={lang} />}
      </div>

      {uploadMethod === 'file' ? (
        <div className="mt2">
          <FileUpload
            id="file"
            label="Upload Solution"
            file={file}
            onChangeFunction={(e) => setFile(e.currentTarget.files[0])}
          />
        </div>
      ) : (
        <Editor />
      )}
      <Button
        raised
        // className="mt1"
        onClick={() => {
          validationCheck();
        }}
      >
        Submit
      </Button>
      {uploadMethod === 'code' && (
        <Button
          raised
          style={{ marginLeft: '1rem' }}
          onClick={() => {
            validateRun();
          }}
        >
          Run
        </Button>
      )}
      {uploadMethod === 'code' && (
        <Row style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
          <Cell style={{ width: '40%' }}>
            <TextField
              id="outlined-multiline-static"
              label="Input"
              multiline
              minRows={10}
              variant="outlined"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              style={{ marginTop: '20px', width: '100%' }}
            />
          </Cell>
          <Cell style={{ width: '40%' }}>
            <TextField
              id="outlined-multiline-static"
              label="Output"
              multiline
              minRows={10}
              variant="outlined"
              disabled
              value={output}
              style={{ marginTop: '20px', width: '100%' }}
            />
          </Cell>
        </Row>
      )}
    </AceEditorContext.Provider>
  );
};

export default SubmitOnProblemPage;
