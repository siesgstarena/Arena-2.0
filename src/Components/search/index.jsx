import React, { useState } from 'react';
import { Headline3 } from '@material/react-typography';
import TextField, { Input } from '@material/react-text-field';
import { Cell, Grid, Row } from '@material/react-layout-grid';
import ChooseTags from './ChooseTags';
import Results from './Results/Results';

const Search = () => {
  const [query, setQuery] = useState('');
  return (
    <Grid className="mw8 center pa3">
      <Row>
        <Cell desktopColumns={12} tabletColumns={8} phoneColumns={4}>
          <Headline3 className="purple">Search</Headline3>
          <TextField
            label="Search SIESGSTarena"
            className="mb4 w-100"
            outlined
          >
            <Input
              autoFocus
              value={query}
              onChange={e => setQuery(e.currentTarget.value)}
            />
          </TextField>
        </Cell>
      </Row>
      <Row>
        <Cell desktopColumns={4} tabletColumns={2}>
          <ChooseTags />
        </Cell>
        <Cell desktopColumns={8} tabletColumns={6}>
          <Results />
        </Cell>
      </Row>
    </Grid>
  );
};

export default Search;
