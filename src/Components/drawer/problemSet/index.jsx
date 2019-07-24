import React, { useState } from 'react';
import Button from '@material/react-button';
import { Headline4, Body1 } from '@material/react-typography';
import ProblemSetTable from './ProblemSetTable';

const ProblemSet = () => {
  const [displayClearFilters, setDisplayClearFilters] = useState(false);
  const [key, setKey] = useState(1);

  // Key in this case is used to re-mount the ProblemSetTable when
  // the user clicks on clear filters button
  // Everytime the key changes, the ProblemSetTable is re-mounted
  const clearFilters = () => {
    setKey(key + 1);
    setDisplayClearFilters(false);
  };
  return (
    <div className="mw7 center pa3 pt0">
      <Headline4 className="purple mb0">Problems</Headline4>
      <Body1 className="mid-gray">Problems from previous contests</Body1>
      {
      displayClearFilters
        ? (
          <Button className="mb2" onClick={clearFilters}>
            Clear Filters
          </Button>
        )
        : null
      }
      <ProblemSetTable key={key} setDisplayClearFilters={setDisplayClearFilters} />
    </div>
  );
};

export default ProblemSet;
