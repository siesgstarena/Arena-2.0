import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import AccessTime from '@material-ui/icons/AccessTime';

const MaterialUITimePicker = (props) => {
  const { label, id, value, onChangeFunction } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardTimePicker
        className="w-100"
        margin="normal"
        id={id}
        label={label}
        value={value}
        onChange={onChangeFunction}
        KeyboardButtonProps={{
          'aria-label': 'change time',
        }}
        keyboardIcon={<AccessTime />}
      />
    </MuiPickersUtilsProvider>
  );
};

MaterialUITimePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default MaterialUITimePicker;
