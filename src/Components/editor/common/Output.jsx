import { Card, CardActions, CircularProgress, TextField, Typography } from '@material-ui/core';
import { Button } from '@material/react-button';
import { Cell, Row } from '@material/react-layout-grid';
import React from 'react';
import { PropTypes } from 'prop-types';

const Output = ({ output, setOutput, loading }) => {
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
        }}
      >
        <Cell>
          <Typography gutterBottom variant="h5" component="h2" style={{ color: '#2F2F2F' }}>
            Output
          </Typography>
        </Cell>
        {/* spinner */}
        {loading && (
          <Cell>
            <CircularProgress color="primary" size="2rem" />
          </Cell>
        )}
        <Cell>
          <Button outlined color="primary" onClick={() => setOutput('')}>
            Clear
          </Button>
        </Cell>
      </Row>
      <CardActions>
        <TextField
          id="outlined-multiline-static"
          multiline
          minRows={6}
          disabled
          value={output}
          variant="outlined"
          style={{
            width: '100%',
            overflowY: 'scroll',
            height: '160px',
            resize: 'none',
          }}
        />
      </CardActions>
    </Card>
  );
};
Output.propTypes = {
  output: PropTypes.string.isRequired,
  setOutput: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};
export default Output;
