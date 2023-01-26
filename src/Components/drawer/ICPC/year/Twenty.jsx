import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import NavButtons from '../common/NavButtons';
import '../Style.css';

const Twenty = () => {
  return (
    <Container className="container-center">
      <Typography variant="h4" className="purple" align="left">
        SIESGST @ ACM ICPC 2020
        <NavButtons />
      </Typography>
      <Box className="container-center">
        <Box
          component="img"
          className="w100 twentyonesize"
          sx={{
            height: 233,

            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="Not found"
          src="https://res.cloudinary.com/siesgstarena/image/upload/v1576418726/arena/icpc/icpc_2020_1.jpg"
        />
      </Box>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Team Name: CoffeeCode
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        This year one team participated in ACM ICPC. Team CoffeeCode is comprised of Rahul
        Sawantdesai (TE CE), Ninad Chavan (TE CE) and Mithil Poojary (SE IT). This team cleared
        online round easily and was selected for both Gwalior and Amritapuri Regionals.
      </Typography>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Performance
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        Gwalior Regionals: Team was able to solve 5 problems and ranked 70 out of 121 teams. I guess
        they will agree that speed is what differentiates who is up or down in rankings.
      </Typography>
    </Container>
  );
};

export default Twenty;
