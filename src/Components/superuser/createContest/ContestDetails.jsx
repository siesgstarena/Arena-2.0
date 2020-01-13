/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';

const ContestDetails = () => {
  const intialFormDetails = {
    code: '',
    type: 'round',
    name: '',
    description: '',
    start: '',
    end: '',
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

  const onTypeChange = (index, item) => (
    setFormDetails((previousFormDetails) => {
      previousFormDetails.type = item.getAttribute('data-value');
      return { ...previousFormDetails };
    })
  );
  console.log(formDetails);

  return (
    <Grid style={{ padding: '0px' }}>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Contest Code *"
            className="mb3 w-100"
            outlined
          >
            <Input
              value={formDetails.code}
              id="contestCode"
              onChange={e => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <Select
            className="mb3 w-100"
            notchedOutlineClassName="pa1"
            enhanced
            outlined
            label="Type *"
            value={formDetails.type}
            onEnhancedChange={onTypeChange}
          >
            <Option value="round">ROUND</Option>
            <Option value="queue">QUEUE</Option>
          </Select>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <TextField
            label="Contest Name *"
            className="pa2 mb4 w-100"
            outlined
          >
            <Input
              value={formDetails.name}
              id="contestName"
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
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Contest Code *"
            className="mb3 w-100"
            outlined
          >
            <Input
              value={formDetails.code}
              id="contestCode"
              onChange={e => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TextField
            label="Contest Code *"
            className="mb3 w-100"
            outlined
          >
            <Input
              value={formDetails.code}
              id="contestCode"
              onChange={e => onTextFieldChange(e, 'code')}
            />
          </TextField>
        </Cell>
      </Row>
    </Grid>
  );
};

export default ContestDetails;
