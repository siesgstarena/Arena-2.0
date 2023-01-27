import {
  Card,
  CardActions,
  CircularProgress,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { Button } from '@material/react-button';
import { Cell, Row } from '@material/react-layout-grid';
import React from 'react';
import { PropTypes } from 'prop-types';
import '../Style.css';

const useStyles = makeStyles(() => ({
  input: {
    color: '#000000',
  },
}));
const Output = ({ output, setOutput, loading }) => {
  const classes = useStyles();

  return (
    <Card className="w-100">
      <Row className="output-row">
        <Cell>
          <Typography gutterBottom variant="h5" component="h2" className="color-grey">
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
          variant="filled"
          className="input-textfield"
          inputProps={{ className: classes.input }}
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
