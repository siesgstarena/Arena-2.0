import React, { useContext } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-c_cpp';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-golang';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/ext-language_tools';

import optionToextLanguages from './defaults/extLanguages';
import AceEditorContext from '../../Contexts/AceEditorContext';

const Editor = () => {
  const { editorConfig, setEditorConfig } = useContext(AceEditorContext);
  return (
    <AceEditor
      mode={optionToextLanguages[editorConfig.mode]}
      theme={editorConfig.theme}
      tabSize={editorConfig.tabSize}
      width="100%"
      height="500px"
      fontSize={editorConfig.fontSize}
      enableBasicAutocompletion={editorConfig.enableBasicAutocompletion}
      enableSnippets={editorConfig.enableSnippets}
      enableLiveAutocompletion={editorConfig.enableLiveAutocompletion}
      value={editorConfig.code}
      wrapEnabled={editorConfig.wrapEnabled}
      editorProps={{
        $blockScrolling: true,
      }}
      onChange={(value) => {
        setEditorConfig({
          ...editorConfig,
          code: value,
        });
      }}
    />
  );
};

export default Editor;
