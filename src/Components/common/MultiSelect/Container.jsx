import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ children }) => (
  <div className="b--gray ba br2 pa2">
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Container;
