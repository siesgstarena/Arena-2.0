import { Card, CardActions, TextField, Typography } from '@material-ui/core';
import { Button } from '@material/react-button';
import { Cell, Row } from '@material/react-layout-grid';
import React from 'react';
import { PropTypes } from 'prop-types';
import '../Style.css';

const Input = ({ input, setInput }) => {
  return (
    <Card className="w-100">
      <Row className="input-row">
        <Cell>
          <Typography gutterBottom variant="h5" component="h2" className="color-grey">
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
          className="input-textfield"
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
