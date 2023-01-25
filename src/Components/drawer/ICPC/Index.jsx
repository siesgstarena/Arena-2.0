import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';
import NavButtons from './common/NavButtons';
import './Style.css';

const Index = () => {
  return (
    <Container className="container-center">
      <Typography variant="h4" className="purple" align="left">
        SIESGST @ ACM ICPC
      </Typography>
      <NavButtons />
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          What is ACM ICPC?
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">
        The ACM ICPC is considered as the &quot;Olympics of Programming Competitions. It is quite
        simply, the oldest, largest, and most prestigious programming contest in the world. The
        ACM-ICPC (Association for Computing Machinery - International Collegiate Programming
        Contest) is a multi-tier, team-based, programming competition. The contest participants come
        from over 2,000 universities that are spread across 80 countries and six continents. In
        terms of prize money, the top team takes home $15,000 along with the ICPC Gold medal. Three
        other teams getting Gold Medal are awarded $7,500. Each Silver Medal team gets $6,000 and
        each Bronze Medal team is awarded $3,000. Courtesy of the UPE Computer Science Honor
        Society, the First Solution Award will be $1,500. For the other solved problems, The First
        to Solve Award will be $1,200.
      </Typography>
      <Box className="container-center">
        <Typography variant="h6" color="textPrimary">
          Our History
        </Typography>
      </Box>
      <Typography variant="body1" color="textSecondary">
        {' '}
        4 Years of Participation
      </Typography>
      SIESGST first participated in ACM ICPC 2016-17
      <Typography variant="body1" color="textSecondary">
        3 Time Regionalists
      </Typography>
      Teams from SIESGST have ranked in regionals twice
      <Typography variant="body1" color="textSecondary">
        5 Problems Solved
      </Typography>
      Current record is of maximum 5 solved problems at any regionals
      <Box className="container-center">
        <Typography variant="h5" color="textPrimary" align="left">
          Updates
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary">
        <li>Team Floor Gang participated at ACM ICPC Amritapuri Regionals 2020-21!</li>
        <li>Team CoffeeCode participated at ACM ICPC Gwalior Regionals 2019-20!</li>
        <li>Team Firebase participated at ACM ICPC Amritapuri Regionals 2017-18!</li>
      </Typography>
      <Box className="container-center">
        <Typography variant="h5" color="textPrimary" align="left">
          I want to participate
        </Typography>
      </Box>
      <Typography variant="body2">
        For more details on contest eligibility, structure and its registration
        <a href="https://www.codechef.com/icpc" className="ml1">
          visit here
        </a>
      </Typography>
    </Container>
  );
};

export default Index;
