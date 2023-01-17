import { Box, Typography } from '@material-ui/core';
import { Headline1, Headline2, Headline4 } from '@material/react-typography';
import React, { useEffect } from 'react';

const Hero = () => {
  const countDownDate1 = new Date('Mar 13, 2023 18:59:00').getTime();
  const countDownDate2 = new Date('Mar 10, 2023 00:00:00').getTime();

  useEffect(() => {
    // eslint-disable-next-line vars-on-top, no-var
    var x = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance1 = countDownDate1 - now;
      const distance2 = countDownDate2 - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance1 / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance1 % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById('days').innerHTML = days;
      document.getElementById('hours').innerHTML = hours;
      document.getElementById('minutes').innerHTML = minutes;
      document.getElementById('seconds').innerHTML = seconds;

      // If the count down is finished, write some text
      if (distance1 <= 0) {
        clearInterval(x);
        document.getElementById('days').innerHTML = '00';
        document.getElementById('hours').innerHTML = '00';
        document.getElementById('minutes').innerHTML = '00';
        document.getElementById('seconds').innerHTML = '00';
      }

      if (distance2 <= 0) {
        // eslint-disable-next-line vars-on-top, no-var
      }
    }, 1000);
  });
  return (
    <Box id="poster">
      <Box className="poster">
        <Box className="container col-xs-12 col-xxl-12 px-3 py-3">
          <Box className="row flex-lg-row-reverse align-items-center g-5 py-3">
            <Box className="col-10 col-sm-8 col-lg-6 lottie-player-div">
              <lottie-player
                className="mx-auto overflow-hidden"
                src="https://assets6.lottiefiles.com/packages/lf20_vk4rx3si.json"
                background="transparent"
                speed="1"
                style={{ width: 'auto', height: '400px' }}
                loop=""
                autoplay=""
              />
            </Box>
            <Box className="col-lg-6 head-texts">
              <Typography className="presents">Codechef SIESGST presents</Typography>
              <Headline1 className="display-5 fw-bold lh-1">
                Turing Cup
                <Box
                  component="span"
                  className="display-5 fw-bold lh-1"
                  style={{ color: '#40be2c' }}
                >
                  &nbsp;2023
                </Box>
              </Headline1>
              <Typography className="lead">
                The 6th iteration of annual national level flagship competitive programming contest
                is here!!
              </Typography>
              <Typography className="lead" style={{ color: '#40be2c', marginTop: '-5px' }}>
                Registrations Started!
              </Typography>
              <Box className="d-grid gap-2 d-md-flex justify-content-md-start">
                <a
                  className="btn btn-lg px-5 py-3 me-md-2"
                  type="button"
                  aria-current="page"
                  href="#registration"
                >
                  Register
                </a>
              </Box>
            </Box>
          </Box>
          <Box className="row d-flex justify-content-center align-items-center g-5 py-1">
            <Box className="col-md-12 col-sm-12 col-xs-12 timer text-center d-sm-block">
              <Box className="row scale-in-center">
                <Box className="col countdown-bracket">
                  <Headline2>&#123;</Headline2>
                </Box>
                <Box className="col days text-center">
                  <Headline2 className="value" id="days">
                    00
                  </Headline2>
                  <Headline4>Days</Headline4>
                </Box>
                <Box className="col">
                  <Headline2>: </Headline2>
                </Box>
                <Box className="col hours">
                  <Headline2 className="value" id="hours">
                    00
                  </Headline2>
                  <Headline4>Hours</Headline4>
                </Box>
                <Box className="col">
                  <Headline2>: </Headline2>
                </Box>
                <Box className="col minutes">
                  <Headline2 className="value" id="minutes">
                    00{' '}
                  </Headline2>
                  <Headline4>Minutes</Headline4>
                </Box>
                <Box className="col">
                  <Headline2>: </Headline2>
                </Box>
                <Box className="col seconds">
                  <Headline2 className="value" id="seconds">
                    00{' '}
                  </Headline2>
                  <Headline4>Seconds </Headline4>
                </Box>
                <Box className="col countdown-bracket">
                  <Headline2>&#125;</Headline2>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
