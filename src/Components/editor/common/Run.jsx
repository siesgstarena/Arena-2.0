import React, { useContext } from 'react';
import '../Style.css';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import AceEditorContext from '../../../Contexts/AceEditorContext';

const Run = ({ loading, setLoading, lang, input, setMessageType, setMessage, setOutput }) => {
  const { editorConfig } = useContext(AceEditorContext);
  const runCode = () => {
    setLoading(true);
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
        setLoading(false);
        if (jsonResponse && jsonResponse.status === false) {
          setMessageType('error');
          setMessage(jsonResponse.message);
        } else {
          setOutput(jsonResponse);
        }
      })
      .catch(() => {
        setLoading(false);
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
    <Button
      variant="contained"
      color="primary"
      className="run-btn"
      onClick={validateRun}
      disabled={loading}
    >
      Run
    </Button>
  );
};
Run.propTypes = {
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  input: PropTypes.string.isRequired,
  setMessageType: PropTypes.func.isRequired,
  setMessage: PropTypes.func.isRequired,
  setOutput: PropTypes.func.isRequired,
};
export default Run;
