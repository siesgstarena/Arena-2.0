import React from 'react';
import PropTypes from 'prop-types';
import TextField, { Input } from '@material/react-text-field';
import Editor from '../../../common/MarkdownEditor/Editor';
import EditorContainer from '../../../common/MarkdownEditor/EditorContainer';

const BlogDetails = ({
  blogTitle, blogContent, blogTags,
  setBlogTitle, setBlogContent, setBlogTags,
}) => (
  <div>
    <TextField
      label="Title"
      className="mb4 w-100"
      outlined
    >
      <Input
        value={blogTitle}
        onChange={e => setBlogTitle(e.currentTarget.value)}
      />
    </TextField>
    <EditorContainer title="Description">
      <Editor value={blogContent} setValue={setBlogContent} />
    </EditorContainer>
    <TextField
      label="Your tags (Comma seperated)"
      className="mb4"
      style={{ width: '100%' }}
      textarea
    >
      <Input
        value={blogTags}
        onChange={e => setBlogTags(e.currentTarget.value)}
      />
    </TextField>
  </div>
);

BlogDetails.propTypes = {
  blogTitle: PropTypes.string.isRequired,
  blogContent: PropTypes.string.isRequired,
  blogTags: PropTypes.string.isRequired,
  setBlogTitle: PropTypes.func.isRequired,
  setBlogContent: PropTypes.func.isRequired,
  setBlogTags: PropTypes.func.isRequired,
};

export default BlogDetails;
