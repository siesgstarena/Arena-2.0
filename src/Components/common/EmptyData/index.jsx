import React from 'react';
import PropTypes from 'prop-types';
import { Body1 } from '@material/react-typography';

const EmptyData = ({ message = 'No data found', imageUrl = 'https://res.cloudinary.com/ashokc/image/upload/f_auto,q_auto/v1588485458/arena/assets/empty_ohk2qm.svg' }) => (
  <div className="tc">
    <img
      src={imageUrl}
      alt="no-data"
      style={{ width: '14em', height: 'auto' }}
    />
    <Body1 className="mid-gray">{message}</Body1>
  </div>
);

EmptyData.propTypes = {
  message: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default EmptyData;
