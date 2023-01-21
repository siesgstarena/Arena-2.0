/* eslint-disable jsx-a11y/iframe-has-title */
import { Box, Typography } from '@material-ui/core';
import React from 'react';

const Contact = () => {
  return (
    <Box id="contact">
      <Box className="container" id="contact-head">
        <Box className="row contact-bug">
          <Box className="col-lg-4 contact-fucked">
            <h1 id="head">
              Feel Free To Get In <br />
              Touch With Our <br />
              Team !!
            </h1>
            <Box component="span" id="sub-head-1">
              {' '}
              Codechef SIESGST
            </Box>
            <Box component="span" className="contact-socials">
              <Box component="span" className="icons-social">
                <Box component="span" id="contact-num">
                  <a href="https://linkedin.com/company/codechef-siesgst">
                    {' '}
                    <Box component="span" className="fab fa-linkedin" />
                    &nbsp;LinkedIn
                  </a>
                </Box>
                <Box component="span" id="contact-num">
                  <a href="https://instagram.com/codechef_siesgst">
                    {' '}
                    <Box component="span" className="fab fa-instagram" />
                    &nbsp;Instagram
                  </a>
                </Box>
                <Box component="span" id="contact-num">
                  <a href="https://discord.gg/AHc5vQ">
                    {' '}
                    <Box component="span" className="fab fa-discord" />
                    &nbsp;Discord
                  </a>
                </Box>
              </Box>
            </Box>
            <Box component="span" className="call-mail">
              <Typography id="contact-num">
                <a href="tel:+918652747379">
                  <Box component="span" className="fa fa-phone" />
                  &nbsp;&nbsp;+91 865 274 7379
                </a>
              </Typography>
              <Typography id="contact-num">
                <a href="mailto:codechef@siesgst.ac.in">
                  {' '}
                  <Box component="span" className="fa fa-envelope" />
                  &nbsp;&nbsp;Mail Us
                </a>
              </Typography>
            </Box>
          </Box>
          <Box className="col-lg-6 offset-lg-2" id="right-part">
            <Typography id="head-2">Find us on Map !! </Typography>
            <iframe
              className="clg-map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14025.156793382695!2d73.018366!3d19.04303!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xef26c52d7d73816e!2sSIES%20Graduate%20School%20of%20Technology!5e1!3m2!1sen!2sin!4v1647509429934!5m2!1sen!2sin"
              allowFullScreen=""
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
