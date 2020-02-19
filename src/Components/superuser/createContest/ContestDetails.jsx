/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import Select, { Option } from '@material/react-select';
import TextField, { Input } from '@material/react-text-field';
import DatePicker from '../../common/DatePicker/index';
import TimePicker from '../../common/TimePicker/index';
import MultiSelect from '../../common/MultiSelect/index';

const ContestDetails = () => {
  const intialFormDetails = {
    code: '',
    type: 'round',
    name: '',
    description: '',
    admins: [],
    start: new Date(),
    end: new Date(),
    solutionVisibility: 'after',
  };
  const options = ['ac030540@gmail.com', 'ninadc32@gmail.com', 'test@gmail.com', 'test2@gmail.com'];
  const [formDetails, setFormDetails] = useState(intialFormDetails);
  // console.log(formDetails.admins);
  const onTextFieldChange = (event, keyToBeUpdated) => {
    const { value } = event.target;
    return (setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = value;
      // we are making use of ... operator to return a completely new object
      // and thus making the component re-render since the state has changed.
      return { ...previousFormDetails };
    }));
  };

  const onAdminsChange = updatedOptions => setFormDetails((previousFormDetails) => {
    previousFormDetails.admins = updatedOptions;
    return { ...previousFormDetails };
  });

  const onSelectChange = (index, item, keyToBeUpdated) => (
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = item.getAttribute('data-value');
      return { ...previousFormDetails };
    })
  );

  const handleDateTimeChange = (date, keyToBeUpdated) => {
    setFormDetails((previousFormDetails) => {
      previousFormDetails[keyToBeUpdated] = date;
      return { ...previousFormDetails };
    });
  };
  // console.log(formDetails);

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
            notchedOutlineClassName="pt1"
            enhanced
            outlined
            label="Type *"
            value={formDetails.type}
            onEnhancedChange={(item, index) => onSelectChange(item, index, 'type')}
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
            className="mb2 text-area-border"
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
          <MultiSelect
            options={options}
            selectedOptions={formDetails.admins}
            updateSelectedOptions={onAdminsChange}
          />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <DatePicker value={formDetails.start} id="start-date" label="Contest Start Date" onChangeFunction={date => handleDateTimeChange(date, 'start')} />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TimePicker value={formDetails.start} id="start-time" label="Contest Start Time" onChangeFunction={date => handleDateTimeChange(date, 'start')} />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <DatePicker value={formDetails.end} id="end-date" label="Contest End Date" onChangeFunction={date => handleDateTimeChange(date, 'end')} />
        </Cell>
        <Cell desktopColumns={6} tabletColumns={4} phoneColumns={4}>
          <TimePicker value={formDetails.end} id="end-time" label="Contest End Time" onChangeFunction={date => handleDateTimeChange(date, 'end')} />
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={6} tabletColumns={8} phoneColumns={4}>
          <Select
            className="mt4 mb3 w-100"
            notchedOutlineClassName="pt1"
            enhanced
            outlined
            label="Solution Visibility *"
            value={formDetails.solutionVisibility}
            onEnhancedChange={(index, item) => onSelectChange(index, item, 'solutionVisibility')}
          >
            <Option value="after">AFTER</Option>
            <Option value="during">DURING</Option>
            <Option value="never">NEVER</Option>
          </Select>
        </Cell>
      </Row>
    </Grid>
  );
};

export default ContestDetails;
