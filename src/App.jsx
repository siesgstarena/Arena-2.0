import React, {
  lazy, Suspense, useReducer, useEffect,
} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';
import AppBar from './Components/common/AppBar/index';
import ScrollToTop from './ScrollToTop';
import ContestSkeletonContainer from './Components/drawer/contests/common/ContestPageSkeletonContainer';
import ErrorBoundary from './Components/common/ErrorBoundary/index';
import Footer from './Components/common/Footer/index';
import Spinner from './Components/common/Spinner/index';
import AuthContext from './Contexts/AuthContext';
import authReducer from './reducers/authReducer';
import './App.scss';

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const SignIn = lazy(() => import('./Components/auth/signin/index'));
const SignUp = lazy(() => import('./Components/auth/signup/index'));
const Forgot = lazy(() => import('./Components/auth/forgot/index'));
const Reset = lazy(() => import('./Components/auth/reset/index'));
const ConfirmEmail = lazy(() => import('./Components/auth/confirmEmail/index'));
const ContestsSchedule = lazy(() => import('./Components/drawer/contests/schedule/index'));
const ContestDashboard = lazy(() => import('./Components/drawer/contests/dashboard/index'));
const ContestStatus = lazy(() => import('./Components/drawer/contests/status/index'));
const ContestMySubmissions = lazy(() => import('./Components/drawer/contests/mySubmissions/index'));
const ContestSubmit = lazy(() => import('./Components/drawer/contests/submit/index'));
const ContestRatingChanges = lazy(() => import('./Components/drawer/contests/ratingChanges/index'));
const ContestScoreboard = lazy(() => import('./Components/drawer/contests/scoreboard/index'));
const ContestProblemPage = lazy(() => import('./Components/drawer/contests/problemPage/index'));
const ContestSubmissionPage = lazy(() => import('./Components/drawer/contests/submissionPage/index'));
const Ratings = lazy(() => import('./Components/drawer/ratings/index'));
const BlogsList = lazy(() => import('./Components/drawer/blogs/blogsList/index'));
const BlogPage = lazy(() => import('./Components/drawer/blogs/blogPage/index'));
const CreateBlog = lazy(() => import('./Components/drawer/blogs/create/index'));
const MyBlogs = lazy(() => import('./Components/user/myBlogs/index'));
const EditBlog = lazy(() => import('./Components/drawer/blogs/edit/index'));
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
const PageNotFound = lazy(() => import('./Components/common/PageNotFound/index'));

const App = () => {
  const httpLink = createHttpLink({
    uri: `${process.env.REACT_APP_SERVER_BASE_URL}/graphql`,
    credentials: 'include',
  });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link: httpLink,
    cache,
  });

  let initialState = {
    user: null,
  };
  if (localStorage.getItem('user')) {
    initialState = { ...initialState, user: JSON.parse(localStorage.getItem('user')) };
  }
  const [authState, authDispatch] = useReducer(authReducer, initialState);

  // Logging out the user on mount if the session has expired
  useEffect(() => {
    const now = new Date();
    if (JSON.parse(localStorage.getItem('sessionExpiry')) < now.getTime()) {
      authDispatch({
        type: 'LOGOUT',
      });
    }
  }, []);

  // Here we add all the routes in the app.
  // Depending upon the path, individual route will be rendered.
  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            {/*
                Here we are not using exact pnprop for components like AppBar and Footer,
                meaning they will be rendered whenever their paths are matched with
                some part of the URL. Hence in our case, AppBar and Footer will be rendered
                on all the pages which has REACT_APP_BASE_ADDRESS in their URL
            */}
            <AuthContext.Provider value={{ authState, authDispatch }}>
              <Route path="/" render={() => <AppBar />} />
              <Suspense fallback={<Spinner />}>
                <Switch>
                  <Route
                    path="/contests/:contestId"
                    render={() => (
                      <ContestSkeletonContainer>
                        <Suspense fallback={<Spinner />}>
                          <Route path="/contests/:contestId" exact component={ContestDashboard} />
                          <Route path="/contests/:contestId/status" exact component={ContestStatus} />
                          <PrivateRoute path="/contests/:contestId/my" exact component={ContestMySubmissions} />
                          <Route path="/contests/:contestId/scoreboard" exact component={ContestScoreboard} />
                          <Route path="/contests/:contestId/change" exact component={ContestRatingChanges} />
                          <PrivateRoute path="/contests/:contestId/submit" exact component={ContestSubmit} />
                          <Route path="/contests/:contestId/problem/:problemId" exact component={ContestProblemPage} />
                          <Route path="/contests/:contestId/submission/:submissionId" exact component={ContestSubmissionPage} />
                        </Suspense>
                      </ContestSkeletonContainer>
                    )}
                  />
                  <Route path="/" exact render={() => (<h1 className="tc purple">WIP</h1>)} />
                  <Route path="/auth/signin" exact component={SignIn} />
                  <Route path="/auth/signup" exact component={SignUp} />
                  <Route path="/auth/forgot" exact component={Forgot} />
                  <Route path="/auth/reset/:key" exact component={Reset} />
                  <Route path="/auth/confirm/:userId" exact component={ConfirmEmail} />
                  <Route path="/contests" exact component={ContestsSchedule} />
                  <Route path="/ratings" exact component={Ratings} />
                  <Route path="/blogs" exact component={BlogsList} />
                  <PrivateRoute path="/blogs/create" exact component={CreateBlog} />
                  <PrivateRoute path="/blogs/my" exact component={MyBlogs} />
                  <Route path="/blogs/:blogId" exact component={BlogPage} />
                  <PrivateRoute path="/blogs/:blogId/edit" exact component={EditBlog} />
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
                  <PrivateRoute path="/profile/:userId/settings" exact component={Settings} />
                  <Route path="/profile/:userId" exact component={Profile} />
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
              </Suspense>
              <Route path="/" render={() => <Footer />} />
            </AuthContext.Provider>
          </ScrollToTop>
        </BrowserRouter>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
