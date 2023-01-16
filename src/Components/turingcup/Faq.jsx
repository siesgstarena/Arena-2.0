import { Box } from '@material-ui/core';
import React, { useEffect } from 'react';

const Faq = () => {
  useEffect(() => {
    const accordionItemHeaders = document.querySelectorAll('.accordion-item-header');
    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.addEventListener('click', () => {
        accordionItemHeader.classList.toggle('active');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains('active')) {
          accordionItemBody.style.maxHeight = `${accordionItemBody.scrollHeight}px`;
        } else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
  }, []);

  return (
    <Box id="faq">
      <Box className="faq-tc">
        <h1>
          <center>
            <b>
              Frequently Asked <br />
              Questions
            </b>
          </center>
        </h1>
        <Box className="container" width="80%">
          <Box className="row faq-bug">
            <Box className="col-lg-7">
              <Box className="accordion">
                <Box className="accordion-item">
                  <Box className="accordion-item-header">How is it conducted?</Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      The contest is conducted in single phase and the participants are required to
                      solve the problems within the time limit of 48 hours. Contest consists of
                      several questions of varying difficulty from easy to hard.
                    </Box>
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">What are the Prizes?</Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      Top 3 on the scoreboard win certificates and a cash prize of Rs 5000, Rs 2000
                      and Rs 1000 respectively. Remaining participants also get national level
                      certificate.
                    </Box>
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">How do I register?</Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      You can register for the contest by clicking below. A form will be displayed
                      to you where you can enter your details along with transaction id of payment
                      of fees and then you will be registered.
                      <br />
                      <a href="#registration">REGISTER NOW</a>
                      <br />
                    </Box>
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">Never been to a programming contest?</Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      Turing Cup is the best way to start. Our aim is to provide a place to learn in
                      a short amount of time, interact with other like minded people.
                      <br /> You can practice some questions{' '}
                      <a
                        target="_blank"
                        href="https://www.codechef.com/problems/school?sort_by=SuccessfulSubmission&amp;sorting_order=desc"
                        rel="noreferrer"
                      >
                        HERE
                      </a>
                      <br />
                    </Box>
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">
                    Can I refer to internet during contest?
                  </Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      Yes. We do encourage referencing of online resources in case of any difficulty
                      but any form of plagiarism will be met by strict action.
                    </Box>
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">Where the contest will be conducted?</Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      Contest will be conducted on Arena, platform for online competitive
                      programming contest of Codechef SIESGST.
                    </Box>
                    Made and Maintained by Web Development team of Codechef SIESGST.
                  </Box>
                </Box>
                <Box className="accordion-item">
                  <Box className="accordion-item-header">
                    Whether Certificates will be provided?
                  </Box>
                  <Box className="accordion-item-body">
                    <Box className="accordion-item-body-content">
                      Yes. We will provide certificates for all the participants who have
                      successfully completed the contest.
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="col-lg-5" id="illust">
              <Box className="row">
                <img
                  className="faq-img"
                  src="https://res.cloudinary.com/siesgstarena/image/upload/v1648984976/arena/TuringCup2022/Images/faq.png"
                  style={{ marginLeft: '20%', marginTop: '20%', width: '70%', height: '100%' }}
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Faq;
