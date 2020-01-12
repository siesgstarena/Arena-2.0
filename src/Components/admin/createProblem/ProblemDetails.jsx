/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import FileUpload from '../../common/FileUpload/index';

const ProblemDetails = () => {
  const intialFormDetails = {
    code: '',
    points: '',
    name: '',
    description: '',
    input: '',
    output: '',
    constraints: '',
    examples: '',
    explanation: '',
    inputFile: {},
    outputFile: {},
    tags: '',
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);

  const onTextFieldChange = (event, keyToBeUpdated) => {
    const { value } = event.target;
    return (setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      // we are making use of ... operator to return a completely new object
      // and thus making the component re-render since the state has changed.
      return { ...previousFormDetails };
    }));
  };

  const onFileChange = keyToBeUpdated => (event) => {
    const file = event.target.files[0];
    return (setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = file;
      return { ...previousFormDetails };
    }));
  };

  return (
    <Grid style={{ padding: '0px' }}>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Problem Code"
            className="mb3 w-100"
            outlined
          >
            <Input
              value={formDetails.code}
              id="problemCode"
              onChange={e => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Problem Points"
            className="mt0 mb4 w-100"
            outlined
          >
            <Input
              value={formDetails.points}
              id="problemPoints"
              onChange={e => onTextFieldChange(e, 'points')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Problem Name"
            className="pa2 mb4 w-100"
            outlined
          >
            <Input
              value={formDetails.name}
              id="problemName"
              onChange={e => onTextFieldChange(e, 'name')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Description"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.description}
              onChange={e => onTextFieldChange(e, 'description')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Input"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.input}
              onChange={e => onTextFieldChange(e, 'input')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Output"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.output}
              onChange={e => onTextFieldChange(e, 'output')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Constraints"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.constraints}
              onChange={e => onTextFieldChange(e, 'constraints')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Examples"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.examples}
              onChange={e => onTextFieldChange(e, 'examples')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Explanation"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.explanation}
              onChange={e => onTextFieldChange(e, 'explanation')}
            />
          </TextField>
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
          <TextField
            label="Tags"
            className="mb4 text-area-border"
            textarea
          >
            <Input
              value={formDetails.tags}
              onChange={e => onTextFieldChange(e, 'tags')}
            />
          </TextField>
        </Cell>
      </Row>
    </Grid>
  );
};

export default ProblemDetails;
