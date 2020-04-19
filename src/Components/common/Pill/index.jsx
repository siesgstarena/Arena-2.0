import React from 'react';
import PropTypes from 'prop-types';

const Pill = ({ content }) => (
  <div className="f6 br-pill ba ph3 pv1 dib mid-gray" style={{ margin: '3px' }}>
    {content}
  </div>
);

Pill.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Pill;
