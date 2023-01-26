import { Button, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const NavButtons = () => {
  return (
    <Typography variant="body1" className="purple mt2">
      <Button>
        <Link to="/icpc/twentyone" className="decor">
          2021
        </Link>{' '}
      </Button>
      <Button>
        <Link to="/icpc/twenty" className="decor">
          2020
        </Link>{' '}
      </Button>
      <Button>
        <Link to="/icpc/eighteen" className="decor">
          2018
        </Link>{' '}
      </Button>
      <Button>
        <Link to="/icpc/seventeen" className="decor">
          2017
        </Link>{' '}
      </Button>
    </Typography>
  );
};

export default NavButtons;
