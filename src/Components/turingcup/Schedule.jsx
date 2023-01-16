import { Box } from '@material-ui/core';
import React from 'react';

const Schedule = () => {
  return (
    <Box id="schedule">
      <Box className="container">Our Schedule</Box>
      <section id="timeline">
        <ul>
          <li>
            <Box className="row boxes">
              <Box className="col-6 col-md-4 col-xl-4 box-date">
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  05
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  April
                </Box>
              </Box>
              <Box className="col-12 mx-3 schedule-bug">
                <Box
                  className="row box-heading"
                  style={{
                    fontWeight: '800',
                    fontSize: '24px',
                    textAlign: 'center',
                    color: '#37D200',
                    paddingBottom: '7px',
                  }}
                >
                  Registration begins!
                </Box>
                <Box className="row box-text">
                  Register individually following the procedure given in registration section.
                </Box>
              </Box>
            </Box>
          </li>
          <li>
            <Box className="row boxes">
              <Box className="col-6 col-md-4 col-xl-4 box-date">
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  13
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  April
                </Box>
              </Box>
              <Box className="col-12 mx-3 schedule-bug">
                <Box
                  className="row box-heading"
                  style={{
                    fontWeight: '800',
                    fontSize: '24px',
                    textAlign: 'center',
                    color: '#37D200',
                    paddingBottom: '7px',
                  }}
                >
                  Registration Ends!
                </Box>
                <Box className="row box-text">Registration ends on 13th April 6:59 pm sharp</Box>
              </Box>
            </Box>
          </li>
          <li>
            <Box className="row boxes">
              <Box className="col-6 col-md-4 col-xl-4 box-date">
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  13
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  April
                </Box>
              </Box>
              <Box className="col-12 mx-3 schedule-bug">
                <Box
                  className="row box-heading"
                  style={{
                    fontWeight: '800',
                    fontSize: '24px',
                    textAlign: 'center',
                    color: '#37D200',
                    paddingBottom: '7px',
                  }}
                >
                  Contest Starts
                </Box>
                <Box className="row box-text">
                  Contest starts at 7:00pm. Contenders from several colleges across the country will
                  compete for the Turing Cup 2022 Title.
                </Box>
              </Box>
            </Box>
          </li>
          <li>
            <Box className="row boxes">
              <Box className="col-6 col-md-4 col-xl-4 box-date">
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  15
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  April
                </Box>
              </Box>
              <Box className="col-12 mx-3 schedule-bug">
                <Box
                  className="row box-heading"
                  style={{
                    fontWeight: '800',
                    fontSize: '24px',
                    textAlign: 'center',
                    color: '#37D200',
                    paddingBottom: '7px',
                  }}
                >
                  Contest Ends
                </Box>
                <Box className="row box-text">
                  The contest will end on 15th April 07:00 PM and the champions will be declared.
                </Box>
              </Box>
            </Box>
          </li>
        </ul>
      </section>
    </Box>
  );
};

export default Schedule;
