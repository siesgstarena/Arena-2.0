import React, { useState, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Headline3, Body2 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ChooseTags from './ChooseTags';
import ResultsContainer from './ResultsContainer';

const Search = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const handleSearch = useCallback(() => {
    history.push({
      pathname: '/search',
      search: `?q=${query}`,
    });
  }, [query, history]);
  const handleKeyDown = useCallback(
    (e) => {
      // checking for enter key
      if (e.keyCode === 13) {
        handleSearch();
      }
    },
    [handleSearch]
  );
  // Adding event listener for keydown
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <Grid className="mw8 center pa3">
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <Headline3 className="purple mt0 mb0">Search</Headline3>
          <Body2 className="mt1 mid-gray mb4">You can search for any user, blog or problem</Body2>
          <TextField label="Search SIESGSTarena" className="mb4 w-100" outlined>
            <Input
              autoFocus
              value={query}
              onChange={(e) => {
                setQuery(e.currentTarget.value);
              }}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={4} tabletColumns={8}>
          <ChooseTags />
        </Cell>
        <Cell desktopColumns={8} tabletColumns={8}>
          <ResultsContainer />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Search;
