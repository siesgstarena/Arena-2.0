import React, { useState } from 'react';
import './index.scss';

const Spinner = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <div>
      <div className="spinner-overlay">
        {
          imageLoaded
            ? (
              <div className="spinner-container">
                <div className="image-spinner" />
                <img style={{ height: '8em', width: 'auto' }} src="https://res.cloudinary.com/ashokc/image/upload/c_scale,q_10:420,w_316/v1588856429/arena/assets/arena_wbydxw.png" alt="arena" />
              </div>
            )
            : (
              <div>
                <div className="spinner" />
                <img style={{ height: '8em', width: 'auto' }} onLoad={() => setImageLoaded(true)} src="https://res.cloudinary.com/ashokc/image/upload/c_scale,q_10:420,w_316/v1588856429/arena/assets/arena_wbydxw.png" alt="arena" />
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Spinner;
