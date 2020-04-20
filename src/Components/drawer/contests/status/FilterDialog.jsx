import React, { useState } from 'react';
import Select, { Option } from '@material/react-select';
import { Button } from '@material/react-button';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import PropTypes from 'prop-types';

const problemList = ['Odd or Even', 'Swedish Mafia', 'New Mafia'];

const langList = ['C', 'C++', 'Python 2', 'Python 3', 'Java', 'JavaScript', 'Go'];

const typeList = ['Accepted', 'Wrong Answer', 'Runtime Error', 'Time Limit Exceeded', 'Compilation Error'];

const FilterDialog = ({ isOpen, setOpen }) => {
  const [value, setValue] = useState('None');
  const [language, setLanguage] = useState('None');
  const [type, setType] = useState('None');
  const array = { value, language, type };
  const onEnhancedChange = (_, item) => (setValue(item.getAttribute('data-value')));

  const onLangChange = (_, item) => (setLanguage(item.getAttribute('data-value')));

  const onTypeChange = (_, item) => (setType(item.getAttribute('data-value')));

  return (
    <div>
      <Grid style={{ padding: '0px' }}>
        <Row>
          <Cell className="" desktopColumns={4} tabletColumns={6}>
            <div>
              <Select
                className=""
                notchedOutlineClassName="pa1"
                enhanced
                outlined
                label="Problem"
                value={value}
                onEnhancedChange={onEnhancedChange}
              >
                <Option value="None">Choose Problem</Option>
                {problemList.map(prob => (
                  <Option key={prob} value={prob}>{prob}</Option>
                ))}
              </Select>
            </div>
          </Cell>
          <Cell desktopColumns={4} tabletColumns={6}>
            <div className="">
              <Select
                className=""
                notchedOutlineClassName="pa1"
                enhanced
                outlined
                label="Language"
                value={language}
                onEnhancedChange={onLangChange}
              >
                <Option value="None">Choose Language</Option>
                {langList.map(prob => (
                  <Option key={prob} value={prob}>{prob}</Option>
                ))}
              </Select>
            </div>
          </Cell>
          <Cell desktopColumns={3} tabletColumns={6}>
            <Select
              className=""
              notchedOutlineClassName="pa1"
              enhanced
              outlined
              label="Type"
              value={type}
              onEnhancedChange={onTypeChange}
            >
              <Option value="None">Choose Type</Option>
              {typeList.map(prob => (
                <Option key={typeList.indexOf(prob)} value={prob}>{prob}</Option>
              ))}
            </Select>
          </Cell>
          <Cell tabletColumns={6}>
            <Button
              raised
              className=""
              onClick={() => {
                setOpen(!isOpen);
                console.log(array);
              }}
            >
              Filter
            </Button>
          </Cell>
        </Row>
      </Grid>
    </div>
  );
};

FilterDialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
export default FilterDialog;
