import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import NavButtons from '../common/NavButtons';
import '../Style.css';

export default function Eighteen() {
  return (
    <Container className="container-center">
      <Typography variant="h4" className="purple" align="left">
        SIESGST @ ACM ICPC 2018
        <NavButtons />
      </Typography>
      <Box className="container-center">
        <Box
          component="img"
          className="imagespacing twentyonesize"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Not found."
          src="https://res.cloudinary.com/siesgstarena/image/upload/v1576418366/arena/icpc/icpc_2018_1.jpg"
        />
      </Box>
      <Box className="container-center">
        <Typography variant="h6">Team Name: Firebase</Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        This year one team participated in ACM ICPC. Team Firebase is comprised of Omkar Prabhu (TE
        CE), Aditya Kulkarni (TE CE) and Brijesh Reddy (TE CE). This team cleared online round and
        was selected for Amritapuri Regionals. This was the maiden year for SIESGST as they marked
        their first attendance at any regionals!
      </Typography>
      <Box className="container-center">
        <Typography variant="h6">Performance</Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        Amritapuri Regionals Team was able to solve only 1 problem and ranked 204 out of 250+ teams.
      </Typography>
    </Container>
  );
}
