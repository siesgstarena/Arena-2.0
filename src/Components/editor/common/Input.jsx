import { Card, CardActions, TextField, Typography } from '@material-ui/core';
import { Button } from '@material/react-button';
import { Cell, Row } from '@material/react-layout-grid';
import React from 'react';
import { PropTypes } from 'prop-types';

const Input = ({ input, setInput }) => {
  return (
    <Card
      style={{
        width: '100%',
      }}
    >
      <Row
        style={{
          backgroundColor: '#F7F7F7',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '10px 5px',
          marginBottom: '5px',
        }}
      >
        <Cell>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            style={{
              color: '#2F2F2F',
            }}
          >
            Input
          </Typography>
        </Cell>
        <Cell>
          <Button outlined color="primary" onClick={() => setInput('')}>
            Clear
          </Button>
        </Cell>
      </Row>
      <CardActions>
        <TextField
          id="outlined-multiline-static"
          multiline
          minRows={6}
          value={input}
          variant="outlined"
          style={{
            width: '100%',
            overflowY: 'scroll',
            height: '160px',
            resize: 'none',
          }}
          onChange={(e) => setInput(e.target.value)}
        />
      </CardActions>
    </Card>
  );
};
Input.propTypes = {
  input: PropTypes.string.isRequired,
  setInput: PropTypes.func.isRequired,
};
export default Input;
