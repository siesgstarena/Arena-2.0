import React from 'react';
import PropTypes from 'prop-types';

const IconToggle = ({ isIconClicked, alt, iconLinks }) =>
  isIconClicked ? <img alt={alt} src={iconLinks[0]} /> : <img alt={alt} src={iconLinks[1]} />;

IconToggle.propTypes = {
  isIconClicked: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
  iconLinks: PropTypes.arrayOf(PropTypes.string),
};
export default IconToggle;
