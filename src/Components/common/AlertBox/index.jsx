import React from 'react';
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
  setIsOpen = () => {
    console.log('No set function passed.');
  },
  title = 'No title entered',
  content = 'No content entered',
  onAccept = () => {
    console.log('No accept function passed.');
  },
}) => (
  <Dialog
    onClose={() => {
      setIsOpen(false);
    }}
    open={isOpen}
  >
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <p>{content}</p>
    </DialogContent>
    <DialogFooter>
      <DialogButton action="dismiss">Cancel</DialogButton>
      <DialogButton action="discard" onClick={onAccept} isDefault>
        Accept
      </DialogButton>
    </DialogFooter>
  </Dialog>
);

AlertBox.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onAccept: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default AlertBox;
