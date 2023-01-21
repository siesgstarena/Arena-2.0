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
                  26
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  Feb
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
                  21
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  March
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
                <Box className="row box-text">Registration ends on 21th March 6:59 pm sharp</Box>
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
                  21
                </Box>
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  March
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
                  Qualifier Round
                </Box>
                <Box className="row box-text">
                  Qualifier round will start on 21th March at 07:00 PM and will end on 23th March at
                  07:00 PM.
                </Box>
              </Box>
            </Box>
          </li>
          <li>
            <Box className="row boxes">
              <Box
                className="col-6 col-md-4 col-xl-4 box-date"
                style={{
                  maxWidth: '81%',
                  flex: '0 0 100%',
                }}
              >
                <Box
                  className="row d-block"
                  style={{
                    fontFamily: 'Cabin Sketch,cursive',
                    fontSize: '35px',
                    textAlign: 'center',
                  }}
                >
                  To be Announced Soon
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
                  Final Round
                </Box>
                <Box className="row box-text">
                  Dates for the final round will be posted on the Codechef SIESGST social media
                  accounts. It will be held in offline mode at SIESGST, Nerul.
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
