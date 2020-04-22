import React from 'react';
import Select, { Option } from '@material/react-select';
import PropTypes from 'prop-types';

const DynamicSelect = ({
  label, value, onValueChange, valueList, isValRequired,
}) => (
  <Select
    required={isValRequired}
    className="w-100"
    notchedOutlineClassName="pa2"
    enhanced
    outlined
    label={label}
    value={value}
    onEnhancedChange={onValueChange}
  >
    <Option value="None">{`Choose ${label}`}</Option>
    {valueList.map(val => (
      <Option key={val} value={val}>{val}</Option>
    ))}
  </Select>
);

DynamicSelect.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func.isRequired,
  valueList: PropTypes.array.isRequired,
  isValRequired: PropTypes.bool.isRequired,
};

export default DynamicSelect;
