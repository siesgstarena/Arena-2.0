import React from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material/react-snackbar';

const CustomSnackbar = (props) => {
  const { snackbarMessage, setSnackbarMessage } = props;
  return (
    <div>
      {
        // timeoutMS is the time in milliseconds after which the snackbar is automatically closed
        snackbarMessage
          ? <Snackbar message={snackbarMessage} timeoutMs={4000} leading actionText="dismiss" onClose={() => setSnackbarMessage('')} />
          : null
      }
    </div>
  );
};

CustomSnackbar.propTypes = {
  snackbarMessage: PropTypes.string.isRequired,
  setSnackbarMessage: PropTypes.func.isRequired,
};

export default CustomSnackbar;
