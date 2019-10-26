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
  // console.log(formDetails);

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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.code = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.points = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.name = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.description = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.input = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.output = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.constraints = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.examples = value;
                  return { ...previousFormDetails };
                }));
              }}
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.explanation = value;
                  return { ...previousFormDetails };
                }));
              }}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              return (setFormDetails((previousFormDetails) => {
                previousFormDetails.inputFile = file;
                return { ...previousFormDetails };
              }));
            }
          }
          />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <input
            type="file"
            onChange={(e) => {
              const file = e.target.files[0];
              return (setFormDetails((previousFormDetails) => {
                previousFormDetails.outputFile = file;
                return { ...previousFormDetails };
              }));
            }
          }
          />
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
              onChange={(e) => {
                const { value } = e.target;
                return (setFormDetails((previousFormDetails) => {
                  previousFormDetails.tags = value;
                  return { ...previousFormDetails };
                }));
              }}
            />
          </TextField>
        </Cell>
      </Row>
    </Grid>
  );
};

export default CreateProblem;
