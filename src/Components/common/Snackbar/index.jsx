import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material/react-snackbar';

const CustomSnackbar = ({ snackbarMessage, setSnackbarMessage }) => (
  <>
    {
      // timeoutMS is the time in milliseconds after which the snackbar is automatically closed
      snackbarMessage ? (
        <Snackbar
          message={snackbarMessage}
          timeoutMs={4000}
          leading
          actionText="dismiss"
          onClose={() => setSnackbarMessage('')}
        />
      ) : null
    }
  </>
);

CustomSnackbar.propTypes = {
  setSnackbarMessage: PropTypes.func.isRequired,
  snackbarMessage: PropTypes.string.isRequired,
};

export default CustomSnackbar;
