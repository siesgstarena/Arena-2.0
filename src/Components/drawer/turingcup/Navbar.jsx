/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef } from 'react';

const Navbar = () => {
  useEffect(() => {
    const btns = document.getElementsByClassName('nav-item');
    for (let i = 0; i < btns.length; i += 1) {
      btns[i].addEventListener('click', function handelNavLink() {
        const current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace('active', 'nav-link');
        // eslint-disable-next-line react/no-this-in-sfc
        this.children[0].className = 'active btn-sm px-3';
      });
    }
  });
  const navRef = useRef(null);

  function toggleNav() {
    document.querySelector('.navbar-collapse').classList.toggle('show');
  }
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navRef.current.classList.add('navbar-shadow');
    } else {
      navRef.current.classList.remove('navbar-shadow');
    }
    if (window.scrollY > 500) {
      navRef.current.classList.remove('navbar-light');
      navRef.current.classList.add('navbar-dark');
      navRef.current.classList.add('navbar-shadow');
    } else {
      navRef.current.classList.remove('navbar-dark');
      navRef.current.classList.add('navbar-light');
      navRef.current.classList.add('navbar-shadow');
    }
  };
  return (
    <>
      <link
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      />
      <nav
        className="relative navbar navbar-expand-md fixed-top flex justify-between items-center py-6 z-10 navbar-light navbar-shadow"
        ref={navRef}
      >
        <div className="relative container px-4 mx-auto">
          <a className="navbar-brand" href="#">
            Turing Cup
          </a>
          <button
            className="navbar-toggler"
            onClick={toggleNav}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto mb-2 mb-md-0 align-items-center justify-content-end justify-content-md-between">
              <li className="nav-item">
                <a className="active btn-sm px-3" aria-current="page" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#schedule">
                  Schedule
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#registration">
                  Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#faq">
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
