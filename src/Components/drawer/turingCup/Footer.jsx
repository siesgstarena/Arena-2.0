/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@material-ui/core';
import React from 'react';

const Footer = () => {
  return (
    <>
      <Box id="footer">
        <footer>
          <Box className="footer-text d-flex align-items-center justify-content-center">
            <a href="#">Turing Cup 2023</a>
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
    </>
  );
};

export default Footer;
