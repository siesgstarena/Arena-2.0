import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog, {
  DialogContent,
  DialogButton,
  DialogTitle,
} from '@material/react-dialog';
import { useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import Button from '@material/react-button';
import MessageCard from '../../common/MessageCard/index';
import PasswordField from '../../common/PasswordField/index';
import useSessionExpired from '../../../customHooks/useSessionExpired';
import { UPDATE_PASSWORD } from '../../../graphql/mutations';

const PasswordChange = ({ isOpen, setOpen }) => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const history = useHistory();
  const { isSessionExpired, redirectOnSessionExpiredAfterRender } = useSessionExpired();

  const client = useApolloClient();
  const handlePasswordChange = async () => {
    setMessageType('loading');
    setMessage('Updating Password, Please Wait');
    const { data, error } = await client.mutate({
      mutation: UPDATE_PASSWORD,
      variables: {
        oldPassword,
        password: newPassword,
      },
    });
    if (error) {
      setMessageType('error');
      setMessage('Database error encountered');
      return;
    }
    if (isSessionExpired(data.updatePassword)) {
      redirectOnSessionExpiredAfterRender();
      return;
    }
    if (data.updatePassword.success) {
      history.push({
        pathname: '/auth/signin',
        state: {
          messageType: 'success',
          message: 'Your password has been updated successfully. You can now login with your new credentials.',
          isSessionExpired: true,
        },
      });
    } else {
      setMessageType('error');
      setMessage(data.updatePassword.message);
    }
  };

  return (
    <Dialog
      className=""
      open={isOpen}
      onClose={() => { setOpen(false); }}
    >
      <DialogTitle className="tc">
        Change Password
      </DialogTitle>
      <DialogContent>
        <div className="pl2 pr2 pt2">
          <PasswordField id="Old Password" label="Old Password" password={oldPassword} setPassword={setOldPassword} />
        </div>
        <div className="pl2 pr2 pt2">
          <PasswordField id="New Password" label="New Password" password={newPassword} setPassword={setNewPassword} />
        </div>
        <div className="pl2 pr2 pt2">
          <MessageCard
            messageType={messageType}
            message={message}
            setMessageType={setMessageType}
          />
        </div>
        <Button
          className="ma2"
          raised
          action="submit"
          onClick={handlePasswordChange}
        >
          update
        </Button>
        <DialogButton
          outlined
          action="cancel"
        >
          cancel
        </DialogButton>
      </DialogContent>
    </Dialog>
  );
};

PasswordChange.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};

export default PasswordChange;
