import * as React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import PropTypes from 'prop-types';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css';
// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

const Editor = ({ value, setValue }) => {
  // Initialize a markdown parser
  const mdParser = new MarkdownIt({
    html: true,
    breaks: true,
    linkify: true,
    highlight: (str, lang) => {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return hljs.highlight(lang, str).value;
        } catch (__) {
          return '';
        }
      }
      return '';
    },
  });

  // Finish!
  const handleEditorChange = ({ text }) => {
    setValue(text);
  };

  const renderHTML = (text) => mdParser.render(text);

  return (
    <MdEditor
      value={value}
      name="textarea"
      renderHTML={renderHTML}
      onChange={handleEditorChange}
      config={{
        view: {
          menu: true,
          md: true,
          html: true,
        },
        canView: {
          hideMenu: true,
          menu: true,
          md: true,
          html: true,
          fullScreen: true,
        },
        // imageAccept: '.jpg,.png,.jpeg',
        // htmlClass: 'custom-html-style',
        syncSrollMode: ['rightFollowLeft', 'leftFollowRight'],
        // markdownClass: "ba bw2 ma0 pa0",
      }}
    />
  );
};

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default Editor;
