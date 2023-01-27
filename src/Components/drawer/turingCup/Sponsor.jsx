import { Box } from '@material-ui/core';
import React from 'react';

const Sponsor = () => {
  return (
    <Box id="sponsor">
      <Box className="container pt-5">
        Our Sponsors
        <Box className="row mt-3 mb-5 d-flex justify-content-center">
          <Box className="col-lg-6 mx-auto my-2 d-flex align-items-center justify-content-center">
            {' '}
            <img
              className="sponsor-img"
              src="https://res.cloudinary.com/siesgstarena/image/upload/v1650024988/arena/TuringCup2022/Images/HarPaintingKuchKehtiHai.png"
              alt="Har Painting Kuch Kehti Hai Logo"
              width="300px"
              height="auto"
            />
          </Box>
          <Box className="col-lg-6 mx-auto my-2 d-flex align-items-center justify-content-center">
            {' '}
            <img
              className="sponsor-img"
              src="https://res.cloudinary.com/siesgstarena/image/upload/v1650024989/arena/TuringCup2022/Images/TeamFullStack.png"
              alt="Team FullStack Logo"
              width="300px"
              height="auto"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Sponsor;
