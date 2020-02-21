import React, { useContext } from 'react';
import { Snackbar } from '@material/react-snackbar';
import SnackbarContext from '../../../Contexts/SnackbarContext';

const CustomSnackbar = () => {
  const { snackbarMessage, setSnackbarMessage } = useContext(SnackbarContext);
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

export default CustomSnackbar;
