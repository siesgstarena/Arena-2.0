/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import TextField, { Input } from '@material/react-text-field';
import { Headline4, Body2 } from '@material/react-typography';

const CreateProblem = () => {
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
    inputFile: '',
    outputFile: '',
    tags: '',
  };
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  console.log(formDetails);

  const onTextFieldChange = (event, keyToBeUpdated) => {
    const { value } = event.target;
    return (setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      return { ...previousFormDetails };
    }));
  };

  const onFileChange = (event, keyToBeUpdated) => {
    const file = event.target.files[0];
    return (setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = file;
      return { ...previousFormDetails };
    }));
  };

  return (
    <Grid className="mw7 center pa2">
      <Row>
        <Cell columns={12}>
          <Headline4 className="purple ma0 mb1">Create Problem</Headline4>
          <Body2 className="ma0 ml1 mid-gray mb3">Create Problem for Single Round Match #01</Body2>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Problem Code"
            className="pa2 mb4 w-100"
            outlined
          >
            <Input
              value={formDetails.code}
              onChange={e => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Problem Points"
            className="pa2 mb4 w-100"
            outlined
          >
            <Input
              value={formDetails.points}
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
              onChange={e => onTextFieldChange(e, 'name')}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Description"
            className="mb4"
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
            className="mb4"
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
            className="mb4"
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
            className="mb4"
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
            className="mb4"
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
            className="mb4"
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
          <label className="custom-file-upload" htmlFor="input-file-upload">
            <span className="ma2">Input File</span>
            <input
              className="ma2 noselect"
              id="input-file-upload"
              type="file"
              onChange={e => onFileChange(e, 'inputFile')}
            />
          </label>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <label className="custom-file-upload" htmlFor="output-file-upload">
            <span className="ma2">Output File</span>
            <input
              className="ma2"
              id="output-file-upload"
              type="file"
              onChange={e => onFileChange(e, 'outputFile')}
            />
          </label>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Tags"
            className="mb4"
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

export default CreateProblem;
