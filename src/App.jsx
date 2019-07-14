/* eslint-disable react/prefer-stateless-function */
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import AppBar from './Components/common/AppBar/index';
import SignIn from './Components/auth/signin/index';
import SignUp from './Components/auth/signup/index';
import Forgot from './Components/auth/forgot/index';
import Reset from './Components/auth/reset/index';
import ContestsSchedule from './Components/drawer/contests/contestsSchedule/index';
import ContestTabBar from './Components/drawer/contests/contestPage/ContestTabBar';
import ContestPage from './Components/drawer/contests/contestPage/index';
import ContestStatusPage from './Components/drawer/contests/contestStatus/index';
import ContestMySubmissionsPage from './Components/drawer/contests/mySubmissions/index';
import Ratings from './Components/drawer/ratings/index';
import ProblemSet from './Components/drawer/problemSet/index';
import PlaylistsWelcomePage from './Components/drawer/playlists/welcomePage/index';
import PlaylistsHomePage from './Components/drawer/playlists/homePage/index';
import PlaylistsUNI01 from './Components/drawer/playlists/topicExplanationPage/UNI01';
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

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Here we add all the routes in the app.
  // Depending upon the path, individual route will be rendered.
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <ScrollToTop>
        {/*
            Here we are not using exact prop for components like AppBar and Footer,
            meaning they will be rendered whenever their paths are matched with
            some part of the URL. Hence in our case, AppBar and Footer will be rendered
            on all the pages which has REACT_APP_BASE_ADDRESS in their URL
        */}
        <Route path="/" render={props => <AppBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} {...props} />} />
        <Route path="/auth/signin" exact render={props => <SignIn setIsLoggedIn={setIsLoggedIn} {...props} />} />
        <Route path="/auth/signup" exact render={props => <SignUp setIsLoggedIn={setIsLoggedIn} {...props} />} />
        <Route path="/auth/forgot" exact component={Forgot} />
        <Route path="/auth/reset" exact component={Reset} />
        <Route path="/contests/:id" component={ContestTabBar} />
        <Route path="/contests/:id" exact component={ContestPage} />
        <Route path="/contests/:id/status" exact component={ContestStatusPage} />
        <Route path="/contests/:id/my" exact component={ContestMySubmissionsPage} />
        <Route path="/contests" exact component={ContestsSchedule} />
        <Route path="/ratings" exact component={Ratings} />
        <Route path="/problem-set" exact component={ProblemSet} />
        <Route path="/playlists" exact component={PlaylistsWelcomePage} />
        <Route path="/playlists/home" exact component={PlaylistsHomePage} />
        <Route path="/playlists/topic/UNI01" exact component={PlaylistsUNI01} />
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
};

export default App;
