import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import useStateWithLocalStroage from './customHooks/useStateWithLocalStorage';
import Spinner from './Components/common/Spinner/index';
import UserContext from './Contexts/UserContext';
<<<<<<< HEAD
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
import Submission from './Components/drawer/contests/submit/index';
// import PageNotFound from './Components/common/PageNotFound/index';
=======
>>>>>>> 7b90d3f59b41ff98c36de8b926f27e190bf71d7c
import './App.scss';
// import Editor from './Components/drawer/blogs/create/editor';

const App = () => {
  const ScrollToTop = lazy(() => import('./ScrollToTop'));
  const PrivateRoute = lazy(() => import('./PrivateRoute'));
  const AppBar = lazy(() => import('./Components/common/AppBar/index'));
  const SignIn = lazy(() => import('./Components/auth/signin/index'));
  const SignUp = lazy(() => import('./Components/auth/signup/index'));
  const Forgot = lazy(() => import('./Components/auth/forgot/index'));
  const Reset = lazy(() => import('./Components/auth/reset/index'));
  const ConfirmEmail = lazy(() => import('./Components/auth/confirmEmail/index'));
  const ContestsSchedule = lazy(() => import('./Components/drawer/contests/schedule/index'));
  const ContestTabBar = lazy(() => import('./Components/drawer/contests/common/ContestTabBar'));
  const ContestDashboard = lazy(() => import('./Components/drawer/contests/dashboard/index'));
  const ContestStatus = lazy(() => import('./Components/drawer/contests/status/index'));
  const ContestMySubmissions = lazy(() => import('./Components/drawer/contests/mySubmissions/index'));
  const Scoreboard = lazy(() => import('./Components/drawer/contests/scoreboard/index'));
  const Ratings = lazy(() => import('./Components/drawer/ratings/index'));
  const BlogsList = lazy(() => import('./Components/drawer/blogs/blogsList/index'));
  const ProblemSet = lazy(() => import('./Components/drawer/problemSet/index'));
  const PlaylistsWelcomePage = lazy(() => import('./Components/drawer/playlists/welcomePage/index'));
  const PlaylistsHomePage = lazy(() => import('./Components/drawer/playlists/homePage/index'));
  const PlaylistsUNI01 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI01'));
  const PlaylistsUNI02 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI02'));
  const PlaylistsUNI03 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI03'));
  const PlaylistsUNI04 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI04'));
  const PlaylistsUNI05 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI05'));
  const PlaylistsUNI06 = lazy(() => import('./Components/drawer/playlists/topicExplanationPage/UNI06'));
  const Goodies = lazy(() => import('./Components/drawer/goodies/index'));
  const Profile = lazy(() => import('./Components/user/profile/index'));
  const Settings = lazy(() => import('./Components/user/settings/index'));
  const About = lazy(() => import('./Components/footerPages/about/index'));
  const Competitions = lazy(() => import('./Components/footerPages/competitions/index'));
  const Contact = lazy(() => import('./Components/footerPages/contact/index'));
  const OurTeam = lazy(() => import('./Components/footerPages/ourTeam/index'));
  const Feedback = lazy(() => import('./Components/footerPages/feedback/index'));
  const FAQ = lazy(() => import('./Components/footerPages/faq/index'));
  const Privacy = lazy(() => import('./Components/footerPages/privacy/index'));
  const Search = lazy(() => import('./Components/search/index'));
  const AdminEditAnnoucements = lazy(() => import('./Components/admin/editAnnouncements/index'));
  const AdminContestDashboard = lazy(() => import('./Components/admin/contestDashboard/index'));
  const AdminPlagiarism = lazy(() => import('./Components/admin/plagiarism/index'));
  const AdminResetSubmissionStatus = lazy(() => import('./Components/admin/resetSubmissionStatus/index'));
  const AdminCreateProblem = lazy(() => import('./Components/admin/createProblem/index'));
  const AdminEditProblem = lazy(() => import('./Components/admin/editProblem/index'));
  const AdminProblemPage = lazy(() => import('./Components/admin/problemPage/index'));
  const AdminTestProblem = lazy(() => import('./Components/admin/testProblem/index'));
  const SuperuserRatings = lazy(() => import('./Components/superuser/ratings/index'));
  const SuperuserUpdateRatings = lazy(() => import('./Components/superuser/updateRatings/index'));
  const SuperuserContests = lazy(() => import('./Components/superuser/contests/index'));
  const SuperuserCreateContest = lazy(() => import('./Components/superuser/createContest/index'));
  const SuperuserEditContest = lazy(() => import('./Components/superuser/editContest/index'));
  const Footer = lazy(() => import('./Components/common/Footer/index'));
  const PageNotFound = lazy(() => import('./Components/common/PageNotFound/index'));
  // const customFetch = (uri, options) => (fetch(uri, options)
  //   .then((response) => {
  //     console.log("response0", response);
  //     if (response.status >= 300) {
  //       // or handle 400 errors
  //       console.log('Response1', response);
  //       return Promise.reject(response.status);
  //     }
  //     console.log('Response2', response);
  //     return response;
  //   }));

  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_SERVER_BASE_URL}/graphql`,
    credentials: 'include',
    // fetch: customFetch,
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  const [user, setUser] = useStateWithLocalStroage('user', null);

  // Here we add all the routes in the app.
  // Depending upon the path, individual route will be rendered.
  return (
    <ApolloProvider client={client}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Spinner />}>
          <ScrollToTop>
            {/*
                Here we are not using exact prop for components like AppBar and Footer,
                meaning they will be rendered whenever their paths are matched with
                some part of the URL. Hence in our case, AppBar and Footer will be rendered
                on all the pages which has REACT_APP_BASE_ADDRESS in their URL
            */}
            <UserContext.Provider value={{ user, setUser }}>
              <Route path="/" component={AppBar} />
              <Route path="/contests/:contestId" component={ContestTabBar} />
<<<<<<< HEAD
              <Route path="/contests/:contestId" exact component={ContestDashboard} />
              <Route path="/contests/:contestId/status" exact component={ContestStatus} />
              <Route path="/contests/:contestId/submit" exact component={Submission} />
              <Route path="/contests/:contestId/my" exact component={ContestMySubmissions} />
              <Route path="/contests/:contestId/scoreboard" exact component={Scoreboard} />
=======
>>>>>>> 7b90d3f59b41ff98c36de8b926f27e190bf71d7c
              <Switch>
                <Route path="/" exact render={() => (<h1 className="tc purple">WIP</h1>)} />
                <Route path="/auth/signin" exact component={SignIn} />
                <Route path="/auth/signup" exact component={SignUp} />
                <Route path="/auth/forgot" exact component={Forgot} />
                <Route path="/auth/reset/:key" exact component={Reset} />
                <Route path="/auth/confirm/:userId" exact component={ConfirmEmail} />
                <Route path="/contests" exact component={ContestsSchedule} />
                <Route path="/contests/:contestId" exact component={ContestDashboard} />
                <Route path="/contests/:contestId/status" exact component={ContestStatus} />
                <Route path="/contests/:contestId/my" exact component={ContestMySubmissions} />
                <Route path="/contests/:contestId/scoreboard" exact component={Scoreboard} />
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
                <PrivateRoute path="/admin/:contestId/announcements" exact component={AdminEditAnnoucements} />
                <PrivateRoute path="/admin/:contestId" exact component={AdminContestDashboard} />
                <PrivateRoute path="/admin/:contestId/plagiarism" exact component={AdminPlagiarism} />
                <PrivateRoute path="/admin/:contestId/reset/:problemId" exact component={AdminResetSubmissionStatus} />
                <PrivateRoute path="/admin/:contestId/create" exact component={AdminCreateProblem} />
                <PrivateRoute path="/admin/:contestId/:problemId/edit" exact component={AdminEditProblem} />
                <PrivateRoute path="/admin/:contestId/:problemId/test" exact component={AdminTestProblem} />
                <PrivateRoute path="/admin/:contestId/:problemId" exact component={AdminProblemPage} />
                <PrivateRoute path="/superuser/ratings" exact component={SuperuserRatings} />
                <PrivateRoute path="/superuser/contests" exact component={SuperuserContests} />
                <PrivateRoute path="/superuser/contests/create" exact component={SuperuserCreateContest} />
                <PrivateRoute path="/superuser/contests/:contestId/edit" exact component={SuperuserEditContest} />
                <PrivateRoute path="/superuser/ratings/:contestId/update" exact component={SuperuserUpdateRatings} />
                <Route path="*" component={PageNotFound} />
              </Switch>
              <Route path="/" component={Footer} />
            </UserContext.Provider>
          </ScrollToTop>
        </Suspense>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
