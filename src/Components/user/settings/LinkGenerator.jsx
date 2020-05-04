import React from 'react';
import TextField, { Input, HelperText } from '@material/react-text-field';
import PropTypes from 'prop-types';

const LinkGenerator = ({
  id, profileLink, siteName, setValue, onUserNameChange,
}) => (
  <div className="flex" style={{ height: '2.2em' }}>
    <span className="pa2 ba br2 br--left" style={{ backgroundColor: '#f0e8ff', borderColor: 'purple', color: 'purple' }}>{profileLink}</span>
    <div>
      <TextField
        style={{ height: '2.2em' }}
        outlined
        helperText={<HelperText>Username</HelperText>}
      >
        <Input
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
