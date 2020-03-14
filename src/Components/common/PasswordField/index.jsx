import React, { useState, useRef } from 'react';
import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';

const PasswordField = ({
  label, id, password, setPassword,
}) => {
  const [passwordFieldIcon, setPasswordFieldIcon] = useState('visibility');
  const [passwordFieldType, setPasswordFieldType] = useState('password');
  let passwordRef = useRef(null);

  const togglePasswordVisibilityState = () => {
    const { inputElement } = passwordRef;
    inputElement.focus();
    // console.log(inputElement);
    // const strLength = password.length * 2;
    // console.log(strLength);
    // passwordRef.inputElement.onfocus = () => {
    // const value = passwordRef.inputElement.value;
    // passwordRef.inputElement.value = "";
    // passwordRef.inputElement.value = value;
    // };
    // passwordRef.inputElement.selectionEnd = strLength;
    if (passwordFieldIcon === 'visibility') {
      setPasswordFieldIcon('visibility_off');
      setPasswordFieldType('text');
    } else {
      setPasswordFieldIcon('visibility');
      setPasswordFieldType('password');
    }
    // passwordRef.inputElement_.current.selectionStart =
    // passwordRef.inputElement_.current.value.length;
    // passwordRef.inputElement_.current.selectionEnd =
    // passwordRef.inputElement_.current.value.length;
    // const value = passwordRef.inputElement_.current.value;
    // passwordRef.inputElement_.current.value = "";
    // passwordRef.inputElement_.current.value = value;
    // passwordRef.props.value = "";
    // passwordRef.props.value = value;
  };

  return (
    <TextField
      label={label}
      className="pa2 w-100 noselect"
      outlined
      onTrailingIconSelect={togglePasswordVisibilityState}
      trailingIcon={<MaterialIcon className="outline-0" role="presentation" icon={passwordFieldIcon} />}
    >
      <Input
        id={id}
        type={passwordFieldType}
        value={password}
        ref={(inputRef) => { passwordRef = inputRef; }}
        onChange={e => setPassword(e.target.value)}
      />
    </TextField>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};

export default PasswordField;
