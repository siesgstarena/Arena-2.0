/* eslint-disable no-param-reassign */
import React from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import PropTypes from 'prop-types';
import Editor from '../../common/MarkdownEditor/Editor';
import EditorContainer from '../../common/MarkdownEditor/EditorContainer';
import FileUpload from '../../common/FileUpload/index';

const ProblemDetails = ({ formDetails, setFormDetails }) => {
  const onTextFieldChange = (event, keyToBeUpdated) => {
    const { value } = event.target;
    return setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      // we are making use of ... operator to return a completely new object
      // and thus making the component re-render since the state has changed.
      return { ...previousFormDetails };
    });
  };

  const updateEditorStates = (keyToBeUpdated, value) =>
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      // we are making use of ... operator to return a completely new object
      // and thus making the component re-render since the state has changed.
      return { ...previousFormDetails };
    });

  const onFileChange = (keyToBeUpdated) => (event) => {
    const file = event.target.files[0];
    return setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = file;
      return { ...previousFormDetails };
    });
  };

  return (
    <Grid style={{ padding: '0px' }}>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField label="Problem Code" className="mb3 w-100" outlined>
            <Input
              value={formDetails.code}
              id="problemCode"
              onChange={(e) => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField label="Problem Points" className="mt0 mb4 w-100" outlined>
            <Input
              value={formDetails.points}
              id="problemPoints"
              onChange={(e) => onTextFieldChange(e, 'points')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField label="Problem Name" className="mb4 w-100" outlined>
            <Input
              value={formDetails.name}
              id="problemName"
              onChange={(e) => onTextFieldChange(e, 'name')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Description">
            <Editor
              value={formDetails.description}
              setValue={(value) => updateEditorStates('description', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Input">
            <Editor
              value={formDetails.input}
              setValue={(value) => updateEditorStates('input', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Output">
            <Editor
              value={formDetails.output}
              setValue={(value) => updateEditorStates('output', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Constraints">
            <Editor
              value={formDetails.constraints}
              setValue={(value) => updateEditorStates('constraints', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Examples">
            <Editor
              value={formDetails.examples}
              setValue={(value) => updateEditorStates('examples', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <EditorContainer title="Explanation">
            <Editor
              value={formDetails.explanation}
              setValue={(value) => updateEditorStates('explanation', value)}
            />
          </EditorContainer>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <FileUpload
            id="input-file-upload"
            label="Upload input file"
            onChangeFunction={onFileChange('inputFile')}
            file={formDetails.inputFile}
          />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <FileUpload
            id="output-file-upload"
            label="Upload output file"
            onChangeFunction={onFileChange('outputFile')}
            file={formDetails.outputFile}
          />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField label="Tags" className="mb2 text-area-width-100" textarea>
            <Input value={formDetails.tags} onChange={(e) => onTextFieldChange(e, 'tags')} />
          </TextField>
        </Cell>
      </Row>
    </Grid>
  );
};

ProblemDetails.propTypes = {
  formDetails: PropTypes.object.isRequired,
  setFormDetails: PropTypes.func.isRequired,
};

export default ProblemDetails;
