import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Headline4, Headline6 } from '@material/react-typography';
import { Button } from '@material/react-button';
import LinkGenerator from './LinkGenerator';


const Social = ({ socialDetails }) => {
  const [codeChef, setCC] = useState(socialDetails.codechef ? socialDetails.codechef : '');
  const [codeForces, setCF] = useState(socialDetails.codeforces ? socialDetails.codeforces : '');
  const [gitHub, setGH] = useState(socialDetails.github ? socialDetails.github : '');
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

Social.propTypes = {
  socialDetails: PropTypes.object.isRequired,
};

export default Social;
