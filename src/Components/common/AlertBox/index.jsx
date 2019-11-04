import React, { useState } from 'react';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
} from '@material/react-dialog';
import PropTypes from 'prop-types';
import '@material/react-dialog/dist/dialog.css';

const AlertBox = ({
  isOpen = false,
  title = 'No title entered',
  content = 'No content entered',
  onAccept = () => { console.log('No accept function passed.'); },
}) => {
  const [isAlertOpen, setIsAlertOpen] = useState(isOpen);
  return (
    <Dialog
      onClose={() => {
        setIsAlertOpen(false);
      }}
      open={isAlertOpen}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <p>{content}</p>
      </DialogContent>
      <DialogFooter>
        <DialogButton action="dismiss">Cancel</DialogButton>
        <DialogButton action="discard" onClick={onAccept} isDefault>Accept</DialogButton>
      </DialogFooter>
    </Dialog>
  );
};

AlertBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
};

export default AlertBox;
