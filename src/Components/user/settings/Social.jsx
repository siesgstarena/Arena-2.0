import React, { useState } from 'react';
import { Headline4, Headline6 } from '@material/react-typography';
import TextField, { Input, HelperText } from '@material/react-text-field';
import { Button } from '@material/react-button';
import PropTypes from 'prop-types';

const LinkGenerator = ({
  id, profileLink, siteName, setValue, onUserNameChange,
}) => (
  <div className="flex" style={{ height: '40px' }}>
    <span className="pa2 ba b--purple-50 br3 br--left" style={{ backgroundColor: '#f0e8ff', cursor: 'pointer' }}>{profileLink}</span>
    <div className="" style={{ height: '50px !important' }}>
      <TextField
        style={{ height: '40px' }}
        label=""
        notchedOutlineClassName=""
        className=""
        outlined
        helperText={<HelperText>Username</HelperText>}
      >
        <Input
          className=""
          id={id}
          value={siteName}
          onChange={e => onUserNameChange(e.target.value, setValue)}
        />
      </TextField>
    </div>
  </div>
);

LinkGenerator.propTypes = {
  id: PropTypes.any.isRequired,
  profileLink: PropTypes.string.isRequired,
  siteName: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  onUserNameChange: PropTypes.func.isRequired,
};

const Social = () => {
  const [codeChef, setCC] = useState('');
  const [codeForces, setCF] = useState('');
  const [gitHub, setGH] = useState('');
  const profileLink = ['https://codechef.com/users/', 'https://codeforces.com/profile/', 'https://github.com/'];

  const usernames = [codeChef, codeForces, gitHub];

  const onUserNameChange = (item, setVal) => (setVal(item));
  return (
    <div className="">
      <Headline4 className="purple mb2">Social</Headline4>

      <Headline6 className="mt3 mb0">CodeChef</Headline6>
      <LinkGenerator id="1" profileLink={profileLink[0]} siteName={codeChef} setValue={setCC} onUserNameChange={onUserNameChange} />

      <Headline6 className="mt3 mb0">CodeForces</Headline6>
      <LinkGenerator id="2" profileLink={profileLink[1]} siteName={codeForces} setValue={setCF} onUserNameChange={onUserNameChange} />

      <Headline6 className="mt3 mb0">GitHub</Headline6>
      <LinkGenerator id="3" profileLink={profileLink[2]} siteName={gitHub} setValue={setGH} onUserNameChange={onUserNameChange} />

      <Button
        raised
        className="mt3"
        onClick={() => { console.log(usernames); }}
      >
        Update
      </Button>
    </div>
  );
};

export default Social;
