function initialState(options) {
  const defaults = {
    theme: 'github',
    mode: 'Java',
    fontSize: 20,
    showLineNumbers: true,
    showGutter: true,
    highlightActiveLine: true,
    code: '',
    readOnly: false,
    showPrintMargin: false,
    tabSize: 4,
    wrapEnabled: false,
    enableBasicAutocompletion: true,
    enableLiveAutocompletion: false,
    enableSnippets: true,
  };
  return Object.assign({}, defaults, options);
}

export default initialState;
