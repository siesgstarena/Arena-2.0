/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  appBarPath, schedulePath, signinPath, signupPath, forgotPath,
  resetPath, goodiesPath, aboutPath, competitionsPath, contactPath,
  developersPath, feedbackPath, faqPath, privacyPath, footerPath,
} from './routes';
import ScrollToTop from './ScrollToTop';
import AppBar from './Components/common/AppBar/index';
import Schedule from './Components/drawer/contests/schedule/index';
import SignIn from './Components/auth/signin/index';
import SignUp from './Components/auth/signup/index';
import Forgot from './Components/auth/forgot/index';
import Reset from './Components/auth/reset/index';
import Goodies from './Components/drawer/goodies/index';
import About from './Components/footerPages/about/index';
import Competitions from './Components/footerPages/competitions/index';
import Contact from './Components/footerPages/contact/index';
import Developers from './Components/footerPages/developers/index';
import Feedback from './Components/footerPages/feedback/index';
import FAQ from './Components/footerPages/faq/index';
import Privacy from './Components/footerPages/privacy/index';
import Footer from './Components/common/Footer/index';

import './App.scss';

class App extends Component {
  // Here we add all the routes in the app.
  // Depending upon the path, individual route will be rendered.
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop>
          {/*
              Here we are not using exact prop for components like AppBar and Footer,
              meaning they will be rendered whenever their paths are matched with
              some part of the URL. Hence in our case, AppBar and Footer will be rendered
              on all the pages which has REACT_APP_BASE_ADDRESS in their URL
          */}
          <Route path={appBarPath} component={AppBar} />
          <Route path={schedulePath} exact component={Schedule} />
          <Route path={signinPath} exact component={SignIn} />
          <Route path={signupPath} exact component={SignUp} />
          <Route path={forgotPath} exact component={Forgot} />
          <Route path={resetPath} exact component={Reset} />
          <Route path={goodiesPath} exact component={Goodies} />
          <Route path={aboutPath} exact component={About} />
          <Route path={competitionsPath} exact component={Competitions} />
          <Route path={contactPath} exact component={Contact} />
          <Route path={developersPath} exact component={Developers} />
          <Route path={feedbackPath} exact component={Feedback} />
          <Route path={faqPath} exact component={FAQ} />
          <Route path={privacyPath} exact component={Privacy} />
          <Route path={footerPath} component={Footer} />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
