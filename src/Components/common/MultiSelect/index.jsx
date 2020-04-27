import React, {
  useState, useEffect, useRef, useCallback,
} from 'react';
import TextField, { Input } from '@material/react-text-field';
import PropTypes from 'prop-types';
import Container from './Container';
import SelectedItemBox from './SelectedItemBox';

const MultiSelect = ({ options, selectedOptions, updateSelectedOptions }) => {
  const [search, setSearch] = useState('');
  let searchResults = [];
  // used selectedOptionsInteral as ref because others global
  // variables were not getting updated in a lot of functions
  const selectedOptionsInternal = useRef(selectedOptions);
  const [mappedSearchResults, setMappedSearchResults] = useState([]);
  const [mappedSelectedOptions, setMappedSelectedOptions] = useState([]);


  // The following function is used to remove an option from selectedOptions
  const removeOption = useCallback((option) => {
    // Removing the option in consideration from selectedOptions
    selectedOptionsInternal.current = selectedOptionsInternal.current.filter(
      optionPresent => optionPresent !== option,
    );
    // Updating the mappedResults to display the changes on the frontend
    setMappedSelectedOptions(selectedOptionsInternal.current.map(value => (
      <SelectedItemBox option={value} removeOption={removeOption} key={value} />
    )));
    // Updating the options in the parent component
    updateSelectedOptions(selectedOptionsInternal.current);
  }, [updateSelectedOptions]);

  // To add a new option to selectedOptions
  const addOption = useCallback((option) => {
    if (!selectedOptionsInternal.current.some(
      selectedOption => selectedOption.value === option.value,
    )) {
      selectedOptionsInternal.current = [...selectedOptionsInternal.current, option];
      // Updating the mappedResults to display the changes on the frontend
      setMappedSelectedOptions(selectedOptionsInternal.current.map(value => (
        <SelectedItemBox option={value} removeOption={removeOption} key={value.value} />
      )));
    }
    // Updating the options in the parent component
    updateSelectedOptions(selectedOptionsInternal.current);
  }, [removeOption, updateSelectedOptions]);

  // The following function is used to map the options to be displayed to the user
  const mapResults = useCallback((optionsRecieved) => {
    const mappedOptions = optionsRecieved.map((option, index) => {
      if ((index + 1) % 2 === 0) {
        return (
          <div role="presentation" key={option.value} className="bg-washed-green pa2 pointer" onClick={() => addOption(option)}>
            {option.label}
          </div>
        );
      }
      return (
        <div role="presentation" key={option.value} className="bg-lightest-blue pa2 pointer" onClick={() => addOption(option)}>
          {option.label}
        </div>
      );
    });
    return mappedOptions;
  }, [addOption]);


  // The following effect is used to map the options when the component is mounted
  useEffect(() => {
    setMappedSearchResults(mapResults(options));
    setMappedSelectedOptions(selectedOptionsInternal.current.map(value => (
      <SelectedItemBox option={value} removeOption={removeOption} key={value.value} />
    )));
  }, [options, removeOption, mapResults]);

  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    // Updating the disaplyed options based on the searchValue
    searchResults = options.filter(option => option.label.toLowerCase().includes(searchValue));
    // Updating the frontend to reflect the changes
    setMappedSearchResults(mapResults(searchResults));
  };

  return (
    <Container>
      {mappedSelectedOptions}
      <TextField
        label="Select the admin for the contest"
        className="w-100"
        outlined
      >
        <Input
          value={search}
          id="adminName"
          onChange={e => onSearchChange(e)}
        />
      </TextField>
      <div style={{ maxHeight: '100px', overflow: 'scroll' }}>
        {mappedSearchResults}
      </div>
    </Container>
  );
};

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  selectedOptions: PropTypes.array.isRequired,
  updateSelectedOptions: PropTypes.func.isRequired,
};

export default MultiSelect;
