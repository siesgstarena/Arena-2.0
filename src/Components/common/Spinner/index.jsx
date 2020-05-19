import React from 'react';
import './index.scss';

const Spinner = () => (
  <div>
    <div className="spinner-overlay">
      <div className="spinner-container">
        <div className="image-spinner" />
        <img
          style={{ width: '7.4em', height: 'auto' }}
          src="https://res.cloudinary.com/ashokc/image/upload/c_scale,q_10,w_391/v1588856429/arena/assets/arena_wbydxw.jpg"
          alt="arena"
        />
      </div>
    </div>
  </div>
);

export default Spinner;
