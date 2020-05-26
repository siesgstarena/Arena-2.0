import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

const MaterialUIDatePicker = (props) => {
  const { label, id, value, onChangeFunction } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        className="w-100"
        margin="normal"
        id={id}
        label={label}
        format="dd/MM/yyyy"
        value={value}
        onChange={onChangeFunction}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

MaterialUIDatePicker.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  value: PropTypes.any.isRequired,
};

export default MaterialUIDatePicker;
