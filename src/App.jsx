/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AppBar from './Components/common/AppBar/index';
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
          <Route path="/" component={AppBar} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/forgot" exact component={Forgot} />
          <Route path="/reset" exact component={Reset} />
          <Route path="/goodies" exact component={Goodies} />
          <Route path="/about" exact component={About} />
          <Route path="/competitions" exact component={Competitions} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/developers" exact component={Developers} />
          <Route path="/feedback" exact component={Feedback} />
          <Route path="/faq" exact component={FAQ} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/" component={Footer} />
        </ScrollToTop>
      </BrowserRouter>
    );
  }
}

export default App;
