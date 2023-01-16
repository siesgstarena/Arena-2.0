/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box id="footer">
        <footer>
          <Box className="footer-text d-flex align-items-center justify-content-center">
            <a href="#">Turing Cup 2022</a>
          </Box>
          <ul className="social-links">
            <li>
              <a
                target="_blank"
                href="https://www.instagram.com/codechef_siesgst/"
                rel="noreferrer"
              >
                {' '}
                <i className="fab fa-instagram" style={{ color: '#ed302f', fontSize: '1.85rem' }} />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://in.linkedin.com/company/codechefsiesgst"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin" style={{ color: '#0082ca', fontSize: '1.85rem' }} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/siesgstarena" rel="noreferrer">
                <i className="fab fa-github" style={{ color: '#FFFFFF', fontSize: '1.85rem' }} />
              </a>
            </li>
          </ul>
          <Box
            className="d-flex align-items-center justify-content-center"
            style={{ color: '#646166' }}
          >
            Copyright &copy; Codechef SIES GST Chapter
          </Box>
        </footer>
      </Box>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.slim.min.js"
        integrity="sha512-6ORWJX/LrnSjBzwefdNUyLCMTIsGoNP6NftMy2UAm1JBm6PRZCO1d7OHBStWpVFZLO+RerTvqX/Z9mBFfCJZ4A=="
        crossOrigin="anonymous"
      />
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
        integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
        crossOrigin="anonymous"
      />
    </>
  );
};

export default Footer;
