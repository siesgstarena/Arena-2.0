import React from 'react';
import PropTypes from 'prop-types';
import SelectedItemBox from './SelectedItemBox';

const SelectedItemBoxArray = ({ selectedOptions, removeOption }) => {
  const mappedSelectedOptions = selectedOptions.map(option => (
    <SelectedItemBox key={option} option={option} removeOption={removeOption} />
  ));

  return (
    <div>
      {mappedSelectedOptions}
    </div>
  );
};

SelectedItemBoxArray.propTypes = {
  selectedOptions: PropTypes.array.isRequired,
  removeOption: PropTypes.func.isRequired,
};


export default SelectedItemBoxArray;
