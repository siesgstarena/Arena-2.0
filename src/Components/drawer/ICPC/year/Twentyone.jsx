import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import { Container } from '@material-ui/core';
import NavButtons from '../common/NavButtons';
import '../Style.css';

const Twentyone = () => {
  return (
    <Container className="container-center">
      <Typography variant="h4" className="purple" align="left">
        SIESGST @ ACM ICPC 2021
        <NavButtons />
      </Typography>
      <Box className="container-center">
        <Box
          component="img"
          className="mr2 w100 twentyonesize"
          alt="Not found"
          src="https://res.cloudinary.com/siesgstarena/image/upload/v1630910944/arena/icpc/icpc_2021_1.png"
        />
        <Box
          component="img"
          className="mr2 w100 twentyonesize"
          alt="Not found"
          src="https://res.cloudinary.com/siesgstarena/image/upload/v1630910944/arena/icpc/icpc_2021_3.png"
        />
        <Box
          component="img"
          className="mr1 w200 twentyonesize"
          alt="Not found"
          src="https://res.cloudinary.com/siesgstarena/image/upload/v1630910944/arena/icpc/icpc_2021_2.png"
        />
      </Box>
      <Box className="container-center">
        <Typography variant="h6" className="container-center" color="textPrimary">
          Team Name: Floor Gang
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        This year one team participated in ACM ICPC. Team Floor Gang is comprised of Rahul
        Sawantdesai (BE CE) , Ninad Chavan (BE CE) and Shambhavi Sudarshan (BE CE). This team
        cleared preliminary round and was selected for Amritapuri Regionals.
      </Typography>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Performance
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        Preliminary round: Team was able to solve 3 problems and ranked 295 out of 3505 teams.
        Amritapuri Regionals: Team was able to solve 4 problems and ranked 114 out of 722 teams.
      </Typography>
    </Container>
  );
};

export default Twentyone;
