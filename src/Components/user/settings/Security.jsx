import React, { useState } from 'react';
import Button from '@material/react-button';
import { Headline6, Headline4, Body1 } from '@material/react-typography';
import PasswordChange from './PasswordChange';

const Security = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="">
      <Headline4 className="purple mb2">Security</Headline4>
      <Headline6 className="mt3 mb0">Password</Headline6>
      <Button
        className="fr"
        outlined
        onClick={() => {
          setOpen(true);
        }}
      >
        Change Password
      </Button>
      <PasswordChange isOpen={isOpen} setOpen={setOpen} />
      <Body1 className="mt0 mb0 mid-gray">
        It&apos;s been a while since you have changed your password?
      </Body1>
      <Body1 className="mt0 mid-gray">Change it now.</Body1>
    </div>
  );
};

export default Security;
