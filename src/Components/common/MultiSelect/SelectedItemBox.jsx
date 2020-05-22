import React from 'react';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';

const SelectedItemBox = ({ option, removeOption }) => (
  <div className="ba br2 b--moon-gray ma2 mb3 pa3 dib">
    {option.label}
    <div role="presentation" onClick={() => removeOption(option)} className="fr pointer">
      <MaterialIcon icon="close" />
    </div>
  </div>
);

SelectedItemBox.propTypes = {
  option: PropTypes.object.isRequired,
  removeOption: PropTypes.func.isRequired,
};

export default SelectedItemBox;
