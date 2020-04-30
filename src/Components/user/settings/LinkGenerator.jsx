import React from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
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


export default LinkGenerator;