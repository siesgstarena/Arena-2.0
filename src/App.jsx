/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prefer-stateless-function */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import ScrollToTop from './ScrollToTop';
import UserContext from './Contexts/UserContext';
import SnackbarContext from './Contexts/SnackbarContext';
import AppBar from './Components/common/AppBar/index';
import CustomSnackbar from './Components/common/Snackbar/index';
import SignIn from './Components/auth/signin/index';
import SignUp from './Components/auth/signup/index';
import Forgot from './Components/auth/forgot/index';
import Reset from './Components/auth/reset/index';
import ConfirmEmail from './Components/auth/confirmEmail/index';
import ContestsSchedule from './Components/drawer/contests/schedule/index';
import ContestTabBar from './Components/drawer/contests/common/ContestTabBar';
import ContestDashboard from './Components/drawer/contests/dashboard/index';
import ContestStatus from './Components/drawer/contests/status/index';
import ContestMySubmissions from './Components/drawer/contests/mySubmissions/index';
import Ratings from './Components/drawer/ratings/index';
import BlogsList from './Components/drawer/blogs/blogsList/index';
// import Editor from './Components/drawer/blogs/create/editor';
import ProblemSet from './Components/drawer/problemSet/index';
import PlaylistsWelcomePage from './Components/drawer/playlists/welcomePage/index';
import PlaylistsHomePage from './Components/drawer/playlists/homePage/index';
import PlaylistsUNI01 from './Components/drawer/playlists/topicExplanationPage/UNI01';
import PlaylistsUNI02 from './Components/drawer/playlists/topicExplanationPage/UNI02';
import PlaylistsUNI03 from './Components/drawer/playlists/topicExplanationPage/UNI03';
import PlaylistsUNI06 from './Components/drawer/playlists/topicExplanationPage/UNI06';
import PlaylistsUNI04 from './Components/drawer/playlists/topicExplanationPage/UNI04';
import PlaylistsUNI05 from './Components/drawer/playlists/topicExplanationPage/UNI05';
import Goodies from './Components/drawer/goodies/index';
import Profile from './Components/user/profile/index';
import Settings from './Components/user/settings/index';
import About from './Components/footerPages/about/index';
import Competitions from './Components/footerPages/competitions/index';
import Contact from './Components/footerPages/contact/index';
import OurTeam from './Components/footerPages/ourTeam/index';
import Feedback from './Components/footerPages/feedback/index';
import FAQ from './Components/footerPages/faq/index';
import Privacy from './Components/footerPages/privacy/index';
import Search from './Components/search/index';
import AdminEditAnnoucements from './Components/admin/editAnnouncements/index';
import AdminContestDashboard from './Components/admin/contestDashboard/index';
import AdminPlagiarism from './Components/admin/plagiarism/index';
import AdminResetSubmissionStatus from './Components/admin/resetSubmissionStatus/index';
import AdminCreateProblem from './Components/admin/createProblem/index';
import AdminEditProblem from './Components/admin/editProblem/index';
import AdminProblemPage from './Components/admin/problemPage/index';
import AdminTestProblem from './Components/admin/testProblem/index';
import SuperuserRatings from './Components/superuser/ratings/index';
import SuperuserUpdateRatings from './Components/superuser/updateRatings/index';
import SuperuserContests from './Components/superuser/contests/index';
import SuperuserCreateContest from './Components/superuser/createContest/index';
import SuperuserEditContest from './Components/superuser/editContest/index';
import Footer from './Components/common/Footer/index';
// import PageNotFound from './Components/common/PageNotFound/index';
import './App.scss';
import Scoreboard from './Components/drawer/contests/scoreboard/index';

const App = () => {
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const httpLink = createHttpLink({
    uri: process.env.REACT_APP_SERVER_URL,
    credentials: 'include',
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  // Custom hook to update local storage when the state changes
  const useStateWithLocalStroage = (localStorageKey, defaultValue) => {
    const [value, setValue] = useState(
      () => (
        JSON.parse(localStorage.getItem(localStorageKey))
          ? JSON.parse(localStorage.getItem(localStorageKey)) : defaultValue
      ),
    );
    useEffect(() => {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    }, [value]);
    return [value, setValue];
  };

  const [user, setUser] = useStateWithLocalStroage('user', null);

  // Here we add all the routes in the app.
  // Depending upon the path, individual route will be rendered.
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ScrollToTop>
          {/*
              Here we are not using exact prop for components like AppBar and Footer,
              meaning they will be rendered whenever their paths are matched with
              some part of the URL. Hence in our case, AppBar and Footer will be rendered
              on all the pages which has REACT_APP_BASE_ADDRESS in their URL
          */}
          <UserContext.Provider value={{ user, setUser }}>
            <SnackbarContext.Provider value={{ snackbarMessage, setSnackbarMessage }}>
              <Route path="/" component={AppBar} />
              <Route path="/" component={CustomSnackbar} />
              <Route path="/contests/:contestId" component={ContestTabBar} />
              <Route path="/contests/:contestId" exact component={ContestDashboard} />
              <Route path="/contests/:contestId/status" exact component={ContestStatus} />
              <Route path="/contests/:contestId/my" exact component={ContestMySubmissions} />
              <Route path="/contests/:contestId/scoreboard" exact component={Scoreboard} />
              <Switch>
                <Route path="/auth/signin" component={SignIn} />
                <Route path="/auth/signup" component={SignUp} />
                <Route path="/auth/forgot" exact component={Forgot} />
                <Route path="/auth/reset/:key" exact component={Reset} />
                <Route path="/auth/confirm/:userId" exact component={ConfirmEmail} />
                <Route path="/contests" exact component={ContestsSchedule} />
                <Route path="/ratings" exact component={Ratings} />
                <Route path="/blog" exact component={BlogsList} />
                {/* <Route path="/blog/create" exact component={Editor} /> */}
                <Route path="/problem-set" exact component={ProblemSet} />
                <Route path="/playlists" exact component={PlaylistsWelcomePage} />
                <Route path="/playlists/home" exact component={PlaylistsHomePage} />
                <Route path="/playlists/topic/UNI01" exact component={PlaylistsUNI01} />
                <Route path="/playlists/topic/UNI02" exact component={PlaylistsUNI02} />
                <Route path="/playlists/topic/UNI03" exact component={PlaylistsUNI03} />
                <Route path="/playlists/topic/UNI06" exact component={PlaylistsUNI06} />
                <Route path="/playlists/topic/UNI04" exact component={PlaylistsUNI04} />
                <Route path="/playlists/topic/UNI05" exact component={PlaylistsUNI05} />
                <Route path="/goodies" exact component={Goodies} />
                <Route path="/profile/:id/settings" exact component={Settings} />
                <Route path="/profile/:id" exact component={Profile} />
                <Route path="/about" exact component={About} />
                <Route path="/competitions" exact component={Competitions} />
                <Route path="/contact" exact component={Contact} />
                <Route path="/our-team" exact component={OurTeam} />
                <Route path="/feedback" exact component={Feedback} />
                <Route path="/faq" exact component={FAQ} />
                <Route path="/privacy" exact component={Privacy} />
                <Route path="/search" exact component={Search} />
                <Route path="/admin/:contestId/announcements" exact component={AdminEditAnnoucements} />
                <Route path="/admin/:contestId" exact component={AdminContestDashboard} />
                <Route path="/admin/:contestId/plagiarism" exact component={AdminPlagiarism} />
                <Route path="/admin/:contestId/reset/:problemId" exact component={AdminResetSubmissionStatus} />
                <Route path="/admin/:contestId/create" exact component={AdminCreateProblem} />
                <Route path="/admin/:contestId/:problemId/edit" exact component={AdminEditProblem} />
                <Route path="/admin/:contestId/:problemId/test" exact component={AdminTestProblem} />
                <Route path="/admin/:contestId/:problemId" exact component={AdminProblemPage} />
                <Route path="/superuser/ratings" exact component={SuperuserRatings} />
                <Route path="/superuser/contests" exact component={SuperuserContests} />
                <Route path="/superuser/contests/create" exact component={SuperuserCreateContest} />
                <Route path="/superuser/contests/:contestId/edit" exact component={SuperuserEditContest} />
                <Route path="/superuser/ratings/:contestId/update" exact component={SuperuserUpdateRatings} />
              </Switch>
              <Route path="/" component={Footer} />
              {/* <Route path="*" component={PageNotFound} /> */}
            </SnackbarContext.Provider>
          </UserContext.Provider>
        </ScrollToTop>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
