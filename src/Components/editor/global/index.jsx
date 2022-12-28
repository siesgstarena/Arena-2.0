import { Button, Grid, Paper, TextField } from '@material-ui/core';
import Select from '@material/react-select';
import { Cell, Row } from '@material/react-layout-grid';
import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-apollo';
import AceEditorContext from '../../../Contexts/AceEditorContext';
import { languageOptions } from '../../drawer/contests/status/options';
import languageDefaults from '../defaults/languages';
import Editor from '../index';
import Menu from '../menu';
import MessageCard from '../../common/MessageCard';
import { GET_EDITOR_SHARE } from '../../../graphql/queries';
import Spinner from '../../common/Spinner';
import SomethingWentWrong from '../../common/SomethingWentWrong';

const Index = () => {
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
    enableLiveAutocompletion: false,
    enableSnippets: true,
  });
  let language = editorConfig.mode;
  let inputData = '';
  let codeData = editorConfig.code;
  const [lang, setLang] = useState(language);
  const [input, setInput] = useState(inputData);
  const [output, setOutput] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const share = params.get('share');
  const { loading, error, data } = useQuery(GET_EDITOR_SHARE, {
    variables: { sharecode: share || '1' },
  });
  useEffect(() => {
    setEditorConfig({
      ...editorConfig,
      mode: language,
      code: codeData,
    });
    setLang(language);
    setInput(inputData);
  }, [data]);
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;
  if (data && data.editor && data.editor.code && data.editor.language) {
    // eslint-disable-next-line prefer-destructuring
    language = data.editor.language;
    inputData = data.editor.input;
    codeData = data.editor.code;
  }
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
  return (
    <AceEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      <div className="w-100">
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </div>
      <Paper
        style={{
          marginLeft: '20px',
          marginRight: '20px',
          marginTop: '20px',
        }}
      >
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={8} xs={12}>
            <Row
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Cell>
                <Select
                  required
                  outlined="true"
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
              </Cell>
              <Cell>
                <Menu input={input} lang={lang} />
              </Cell>
            </Row>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid style={{ height: '100%' }}>
              <div
                style={{
                  borderRight: '1px solid black',
                }}
              >
                <Editor />
              </div>
              <Cell
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                  onClick={validateRun}
                >
                  Run
                </Button>
              </Cell>
            </Grid>
          </Grid>
          {/* <Grid item xs={12} md={8}>
            <Row>
              <Cell>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '10px', marginBottom: '10px' }}
                >
                  Run
                </Button>
              </Cell>
            </Row>
          </Grid> */}
          <Grid item md={4} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Input"
                  multiline
                  minRows={10}
                  value={input}
                  variant="outlined"
                  style={{ width: '100%' }}
                  onChange={(e) => setInput(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-multiline-static"
                  label="Output"
                  multiline
                  minRows={10}
                  disabled
                  value={output}
                  variant="outlined"
                  style={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </AceEditorContext.Provider>
  );
};

export default Index;
