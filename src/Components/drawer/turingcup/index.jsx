import React from 'react';
import { Box } from '@material-ui/core';
import About from './About';
import Hero from './Hero';
import Navbar from './Navbar';
import Registration from './Registration';
import Schedule from './Schedule';
import Faq from './Faq';
import Sponsor from './Sponsor';
import Contact from './Contact';
import Footer from './Footer';
import './Style.css';

const index = () => {
  return (
    <Box style={{ background: 'linear-gradient(81.4deg, #000000 0.86%, #202E44 127.88%)' }}>
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <Registration />
      <Faq />
      <Sponsor />
      <Contact />
      <Footer />
    </Box>
  );
};

export default index;
