import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import NavButtons from '../common/NavButtons';

const Seventeen = () => {
  return (
    <Container className="container-center">
      <Typography variant="h4" className="purple" align="left">
        SIESGST @ ACM ICPC 2017
        <NavButtons />
      </Typography>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Team Name: never_lucky
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        This year one team participated in ACM ICPC. Team never_lucky is comprised of Omkar Prabhu
        (SE CE), Rishabh Karnad (BE IT) and Ashwin Pillai (BE IT). This team cleared online round
        and was selected for Amritapuri Regionals. But due to unforeseen circumstances, they could
        not participate in regionals.
      </Typography>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Performance
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        Amritapuri Regionals Did not participate.
      </Typography>
    </Container>
  );
};

export default Seventeen;
