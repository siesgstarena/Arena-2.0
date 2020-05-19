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

const Viewer = ({ value }) => {
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

  const renderHTML = (enteredText) => mdParser.render(enteredText);

  return (
    <MdEditor
      value={value}
      renderHTML={renderHTML}
      config={{
        view: {
          menu: false,
          md: false,
          html: true,
        },
        canView: {
          hideMenu: false,
          menu: true,
          md: true,
          html: true,
          fullScreen: true,
        },
        // htmlClass: "custom-html-style",
        // markdownClass: "ba bw2 ma0 pa0",
      }}
    />
  );
};

Viewer.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Viewer;

// breaks are working in this.
// The format with which we will be sticking to is html
// now I have to fix the image upload part
