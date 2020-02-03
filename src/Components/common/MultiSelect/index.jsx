import React, { useState } from 'react';
import TextField, { Input } from '@material/react-text-field';
import Container from './Container';
import SelectedItemBoxArray from './SelectedItemBoxArray';

const MultiSelect = () => {
  const [search, setSearch] = useState('');
  const options = ['a', 'b', 'c', 'd'];
  let searchResults = [];
  const [selectedOptions, setSelectedOptions] = useState([]);

  const addOption = (option) => {
    if (!selectedOptions.includes(option)) {
      setSelectedOptions((previousSelectedOptions) => {
        previousSelectedOptions.push(option);
        return [...previousSelectedOptions];
      });
      // setMappedSearchResults(mapResults(searchResults));
      // console.log(selectedOptions, "in addOption");
    }
  };

  const mapResults = (optionsRecieved) => {
    const mappedOptions = optionsRecieved.map((option, index) => {
      if ((index + 1) % 2 === 0) {
        return (
          <div role="presentation" key={option} className="bg-washed-green pa2 pointer" onClick={() => addOption(option)}>
            {option}
          </div>
        );
      }
      return (
        <div role="presentation" key={option} className="bg-lightest-blue pa2 pointer" onClick={() => addOption(option)}>
          {option}
        </div>
      );
    });
    return mappedOptions;
  };

  const [mappedSearchResults, setMappedSearchResults] = useState(mapResults(options));

  // search and setSearch will be handle internally
  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    searchResults = options.filter(email => email.toLowerCase().includes(searchValue));
    setMappedSearchResults(mapResults(searchResults));
  };


  const removeOption = (option) => {
    let updatedSelectedOptions = selectedOptions;
    updatedSelectedOptions = updatedSelectedOptions.filter(
      optionPresent => optionPresent !== option,
    );
    setSelectedOptions(updatedSelectedOptions);
  };

  return (
    <Container>
      <SelectedItemBoxArray selectedOptions={selectedOptions} removeOption={removeOption} />
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

export default MultiSelect;
