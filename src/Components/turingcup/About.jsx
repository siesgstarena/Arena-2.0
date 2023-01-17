/* eslint-disable jsx-a11y/img-redundant-alt */
import { Box, Typography } from '@material-ui/core';
import { Headline2 } from '@material/react-typography';
import React from 'react';

const About = () => {
  return (
    <Box id="about">
      <Box className="dummyAbout">
        <Box className="css-waves">
          <Box className="custom-shape-divider-top-1647607825">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                className="shape-fill"
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              />
            </svg>
          </Box>
          <Box className="custom-shape-divider-top-1647609022">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                className="shape-fill"
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              />
            </svg>
          </Box>
        </Box>
      </Box>
      <Box className="containerAbout">
        <Box className="parentAbout">
          <Box className="ch1About">
            <Headline2 className="titleAbout">What is Turing Cup?</Headline2>
            <Typography className="contentAbout">
              Named after Alan Turing, the Turing Cup is CodeChef SIESGSTs annual flagship
              competitive coding contest. A national level programming challenge, the contest
              invites individual coders to crack challenging problem statements and come up with the
              most intuitive and efficient solution possible - all in the given time frame
            </Typography>
          </Box>
          <Box className="ch2About">
            <img
              className="img1About"
              src="https://res.cloudinary.com/siesgstarena/image/upload/v1648984978/arena/TuringCup2022/Images/about1.png"
              alt="image"
            />
          </Box>
        </Box>
        <Box className="parentAbout2">
          <Box className="ch2About">
            <img
              className="img1About"
              src="https://res.cloudinary.com/siesgstarena/image/upload/v1648984978/arena/TuringCup2022/Images/about2.png"
              alt="image"
            />
          </Box>
          <Box className="ch3About">
            <Headline2 className="titleAbout">How it works?</Headline2>
            <Typography className="contentAbout">
              Contestants are required to complete registration and sign up on the arena platform.
              Once the contest commences, they will compete for the championship title and prizes.
              Turing Cup 2023 will last for 48 hours and participants are required to solve problems
              of varying difficulty from easy to hard.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
