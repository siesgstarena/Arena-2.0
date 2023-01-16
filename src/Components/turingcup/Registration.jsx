/* eslint-disable func-names */
/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Box, Typography } from '@material-ui/core';
import { Button, Headline1 } from '@material/react-typography';
import React from 'react';

const Registration = () => {
  // eslint-disable-next-line vars-on-top, no-var
  var count = 0;
  // Update the count down every 1 second
  const hidreg = document.getElementsByClassName('reg')[0];
  const itemo = document.getElementsByClassName('item');
  const inputFields = document.getElementsByClassName('ans-input');
  const question = document.getElementsByClassName('question');
  const form = document.getElementsByClassName('form-cont')[0];
  function validateEmail(email) {
    const re =
      // eslint-disable-next-line no-useless-escape
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
  // eslint-disable-next-line camelcase
  function validatePhoneNumber(phone_no) {
    const re = /^\d{10}$/;
    return re.test(phone_no);
  }
  function hideReg() {
    hidreg.style.display = 'none';
    form.style.display = 'flex';
    itemo[0].className = 'item fade-in-bottom';
    itemo[0].style.display = 'flex';
    inputFields[0].focus();
  }

  function nql() {
    if (count === 2) {
      if (inputFields[count].value === '') {
        question[count].className = 'question shake-horizontal';
        setTimeout(function () {
          question[count].className = 'question';
        }, 500);
      } else if (!validateEmail(inputFields[count].value)) {
        alert('invalid email');
      } else {
        count += 1;
        itemo[count - 1].className = 'item fade-out-up';
        itemo[count - 1].style.display = 'none';
        itemo[count].style.display = 'flex';
        itemo[count].className = 'item fade-in-bottom';
        inputFields[count].focus();
      }
      // eslint-disable-next-line no-empty
    } else if (count === 7) {
    } else if (inputFields[count].value === '' && count !== 4 && count !== 5) {
      question[count].className = 'question shake-horizontal';
      setTimeout(function () {
        question[count].className = 'question';
      }, 500);
    } else if (count === 1) {
      if (!validatePhoneNumber(inputFields[count].value)) {
        alert('invalid phone number');
      } else {
        count += 1;
        itemo[count - 1].className = 'item fade-out-up';
        itemo[count - 1].style.display = 'none';
        itemo[count].style.display = 'flex';
        itemo[count].className = 'item fade-in-bottom';
        inputFields[count].focus();
      }
    } else {
      count += 1;
      itemo[count - 1].className = 'item fade-out-up';
      itemo[count - 1].style.display = 'none';
      itemo[count].style.display = 'flex';
      itemo[count].className = 'item fade-in-bottom';
      inputFields[count].focus();
    }
    // console.log(count)
  }

  function submitForm() {
    // console.log(`value: ${inputFields[6].value}`)
    if (inputFields[6].value === '') {
      // console.log('invalid');
      question[count].className = 'question shake-horizontal';
      setTimeout(function () {
        question[count].className = 'question';
      }, 500);
    } else {
      // console.log('valid');
      form.submit();
    }
  }

  function pql() {
    // console.log(count)
    itemo[count].className = 'item fade-out-bottom';
    itemo[count].style.display = 'none';
    // console.log(itemo[count - 1])
    itemo[count - 1].style.display = 'flex';
    itemo[count - 1].className = 'item fade-in-top';
    count -= 1;
  }

  function showReg() {
    itemo[0].className = 'item fade-out-bottom';
    itemo[0].style.display = 'none';
    itemo[0].className = 'item';
    form.style.display = 'none';
    hidreg.style.display = 'flex';
  }
  return (
    <Box id="registration">
      <Box className="Registration">
        <Box className="reg" data-aos="fade-up">
          <Headline1 className="str-headings1">Steps to Register</Headline1>
          <Box className="str-row">
            <Box className="str-box">
              <Headline1 className="str-headings">STEP</Headline1>
              <Headline1 className="str-number">1</Headline1>
              <Box className="str-op">
                <Typography className="str-pp">
                  Entry fee for participating in Turing Cup 2022 is Rs. 40/- You can pay via UPI at
                  sampritchaurasiya07-1@okicici or Paytm at 8652747379@paytm
                </Typography>
              </Box>
            </Box>
            <Box className="str-box">
              <Headline1 className="str-headings">STEP</Headline1>
              <Headline1 className="str-number">2</Headline1>
              <Typography className="str-pp">
                After doing the payment, you have to fill up the registration form and mention your
                transaction ID to confirm your registration.
              </Typography>
            </Box>
            <Box className="str-box">
              <Headline1 className="str-headings">STEP</Headline1>
              <Headline1 className="str-number">3</Headline1>
              <Typography className="str-pp">
                Make sure you are registered on&nbsp;
                <a href="http://arena.siesgst.ac.in/auth/signup">Arena</a>&nbsp;before filling up
                the form, as we will require your Arena username while registering for turing cup
              </Typography>
            </Box>
          </Box>
          <Button className="str-button" type="button" onClick={() => hideReg()}>
            Register
          </Button>
        </Box>
        <form
          className="form-cont container"
          action="/turingcup/register"
          method="POST"
          style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}
        >
          <input type="hidden" name="_csrf" />
          <Box className="item" style={{ width: '100%' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;{' '}
                </Box>
                <Box component="span" className="ques">
                  Hello! What&apos;s your Name?
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="search"
                  name="name"
                  placeholder="First Last"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => showReg()}>
                  &nbsp;
                  <input
                    className="prev"
                    type="button"
                    name="prev-btn"
                    value="Prev"
                    onClick={showReg}
                  />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw !important' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  Mobile No. :
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="9003077000"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  Email Address:
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="email"
                  name="email"
                  placeholder="jon@gmail.com"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  College Name:
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="search"
                  name="collegeName"
                  placeholder="SIESGST"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  Branch:
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <label className="radio-label">
                  <input
                    className="input-rad"
                    id="ce"
                    name="branchName"
                    type="radio"
                    value="CE"
                    defaultChecked="checked"
                  />
                  <Box component="span" className="inner-label">
                    CE
                  </Box>
                </label>
                <label className="radio-label">
                  <input className="input-rad" id="it" name="branchName" value="IT" type="radio" />
                  <Box component="span" className="inner-label">
                    IT
                  </Box>
                </label>
                <label className="radio-label">
                  <input
                    className="input-rad"
                    id="extc"
                    name="branchName"
                    value="EXTC"
                    type="radio"
                  />
                  <Box component="span" className="inner-label">
                    EXTC
                  </Box>
                </label>
                <label className="radio-label">
                  <input
                    className="input-rad"
                    id="oth"
                    name="branchName"
                    value="Other"
                    type="radio"
                  />
                  <Box component="span" className="inner-label">
                    Other
                  </Box>
                </label>
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
              <input className="ans-input" style={{ display: 'none' }} />
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  Year:
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <label className="radio-label">
                  <input
                    className="input-rad"
                    id="fe"
                    name="currentYear"
                    type="radio"
                    value="FE"
                    defaultChecked="checked"
                  />
                  <Box component="span" className="inner-label">
                    FE
                  </Box>
                </label>
                <label className="radio-label">
                  <input className="input-rad" id="se" name="currentYear" value="SE" type="radio" />
                  <Box component="span" className="inner-label">
                    SE
                  </Box>
                </label>
                <label className="radio-label">
                  <input className="input-rad" id="te" name="currentYear" value="TE" type="radio" />
                  <Box component="span" className="inner-label">
                    TE
                  </Box>
                </label>
                <label className="radio-label">
                  <input className="input-rad" id="be" name="currentYear" value="BE" type="radio" />
                  <Box component="span" className="inner-label">
                    BE
                  </Box>
                </label>
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
              <input className="ans-input" style={{ display: 'none' }} />
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box component="span" className="ques">
                  Transaction ID:
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="search"
                  name="transactionId"
                  placeholder="TRXN00XX00XX00"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn">
                  <input className="nxt" type="button" name="next-btn" value="Next" onClick={nql} />
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="item" style={{ display: 'none', maxWidth: '100vw', margin: '0rem 1rem' }}>
            <Box className="field-input-div">
              <Box className="question">
                <Box component="span" className="ques">
                  &gt;
                </Box>
                <Box
                  component="span"
                  className="ques"
                  style={{ fontSize: '90%', textAlign: 'left' }}
                >
                  Arena Username (Dont have? SignUp{' '}
                  <a
                    href="http://arena.siesgst.ac.in/auth/signup"
                    style={{ color: '#3DB92A', textDecoration: 'underline', marginRight: '0' }}
                  >
                    here
                  </a>
                  ):
                </Box>
              </Box>
              <Box className="reply" style={{ maxWidth: '100vw !important' }}>
                <Box component="span" className="ans">
                  $
                </Box>
                <input
                  className="ans-input"
                  style={{ maxWidth: '90%' }}
                  type="text"
                  name="arenaUsername"
                  placeholder="Arena Username"
                  autoComplete="off"
                />
              </Box>
              <Box className="btns mb-auto d-flex justify-content-between mt-3">
                <Box className="prev-btn" onClick={() => pql()}>
                  &nbsp;
                  <input className="prev" type="button" name="prev-btn" value="Prev" />
                </Box>
                <Box className="next-btn" onClick={() => submitForm()}>
                  <input
                    className="nxt"
                    type="button"
                    name="next-btn"
                    value="Submit"
                    onClick={submitForm}
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Registration;
