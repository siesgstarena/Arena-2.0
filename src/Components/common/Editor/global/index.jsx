import { Box, Grid } from '@material-ui/core';
import Select from '@material/react-select';
import { Cell, Row } from '@material/react-layout-grid';
import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import AceEditorContext from '../../../../Contexts/AceEditorContext';
import { languageOptions } from '../../../drawer/contests/status/options';
import languageDefaults from '../defaults/languages';
import Editor from '../index';
import Menu from '../menu';
import MessageCard from '../../MessageCard';
import { GET_EDITOR_SHARE } from '../../../../graphql/queries';
import Run from '../common/Run';
import Input from '../common/Input';
import Output from '../common/Output';
import '../Style.css';
import initialState from '../defaults/initialState';

const Index = () => {
  document.title = 'SIESGSTarena | Editor';
  const isMobile = window.innerWidth <= 768;
  const [editorConfig, setEditorConfig] = useState(
    initialState({ code: languageDefaults.Java, fontSize: isMobile ? 15 : 20 })
  );
  const [lang, setLang] = useState(editorConfig.mode);
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const { search } = window.location;
  const params = new URLSearchParams(search);
  const share = params.get('share');
  const [executeQuery, { data }] = useLazyQuery(GET_EDITOR_SHARE);
  useEffect(() => {
    if (share) {
      executeQuery({ variables: { sharecode: share } });
    }
    if (data && data.editor && data.editor.code && data.editor.language) {
      setEditorConfig((prev) => {
        return {
          ...prev,
          code: data.editor.code,
          mode: data.editor.language,
        };
      });
      setLang(data.editor.language);
      if (data.editor.input) {
        setInput(data.editor.input);
      }
    }
  }, [data, executeQuery, share]);
  useEffect(() => {
    const previousCode = localStorage.getItem('editorCode');
    if (previousCode !== null) {
      const { code, language } = JSON.parse(previousCode);
      setEditorConfig({ ...editorConfig, code, mode: language });
      setLang(language);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem(
      'editorCode',
      JSON.stringify({
        code: editorConfig.code,
        language: editorConfig.mode,
      })
    );
  }, [editorConfig.code, editorConfig.mode]);

  return (
    <AceEditorContext.Provider value={{ editorConfig, setEditorConfig }}>
      <Box className="w-100">
        <MessageCard message={message} messageType={messageType} setMessageType={setMessageType} />
      </Box>
      <Box className="global-container">
        <Grid container spacing={3} alignItems="stretch">
          <Grid item md={8} xs={12}>
            <Row className="global-row">
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
            <Grid className="h-100">
              <Box className="global-border">
                <Editor />
              </Box>
              <Cell className="global-cell">
                <Run
                  input={input}
                  lang={lang}
                  setOutput={setOutput}
                  setLoading={setLoading}
                  loading={loading}
                  setMessage={setMessage}
                  setMessageType={setMessageType}
                />
              </Cell>
            </Grid>
          </Grid>
          <Grid item md={4} xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Input input={input} setInput={setInput} />
              </Grid>
              <Grid item xs={12}>
                <Output loading={loading} output={output} setOutput={setOutput} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </AceEditorContext.Provider>
  );
};

export default Index;
