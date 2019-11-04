import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

const FileUpload = ({
  id, label, onChangeFunction, file = { name: '' },
}) => (
  <label className="custom-file-upload" htmlFor={id}>
    {/*
        onChangeFunction is of form:
        onChangeFunction = (otherParams) => (event) => {
        }
        event is passed through the FileUpload's onChange event
        otherParams can be passed in the file where we are writing the onChangeFunction
    */}
    <span className="ma2">{label}</span>
    <input
      className="ma2"
      id={id}
      type="file"
      onChange={e => onChangeFunction(e)}
    />
    {
      file.name
        ? (
          <div className="ma2">
            {file.name}
          </div>
        )
        : null
    }
  </label>
);

FileUpload.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChangeFunction: PropTypes.func.isRequired,
  file: PropTypes.object.isRequired,
};

export default FileUpload;
