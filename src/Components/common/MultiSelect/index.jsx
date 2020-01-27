import React, { useState, useEffect } from 'react';
import TextField, { Input } from '@material/react-text-field';

const MultiSelect = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [mappedSearchResults, setMappedSearchResults] = useState([]);
  const emails = ['a', 'b', 'c', 'd'];

  const onSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
    const results = emails.filter(email => email.toLowerCase().includes(searchValue));
    setSearchResults(results);
  };

  const mapEmails = (mails) => {
    const updatedEmails = mails.map((email, index) => {
      if ((index + 1) % 2 === 0) {
        return (
          <div key={email} className="bg-washed-green pa2 pointer">
            {email}
          </div>
        );
      }
      return (
        <div key={email} className="bg-lightest-blue pa2 pointer">
          {email}
        </div>
      );
    });
    return updatedEmails;
  };

  useEffect(() => {
    setMappedSearchResults(mapEmails(searchResults));
  }, [searchResults]);
  return (
    <div className="b--gray ba br2 pa2">
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
    </div>
  );
};

export default MultiSelect;
