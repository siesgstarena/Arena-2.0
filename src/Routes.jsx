import React, {
  lazy, Suspense,
} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useQuery } from 'react-apollo';
import AppBar from './Components/common/AppBar/index';
import ScrollToTop from './ScrollToTop';
import Footer from './Components/common/Footer/index';
import Spinner from './Components/common/Spinner/index';
import AuthContext from './Contexts/AuthContext';
import { GET_LOGGED_IN_USER } from './graphql/queries';
import ErrorBoundary from './Components/common/ErrorBoundary/index';
import SomethingWentWrong from './Components/common/SomethingWentWrong/index';
import './App.scss';

const PrivateRoute = lazy(() => import('./PrivateRoute'));
const SignIn = lazy(() => import('./Components/auth/signin/index'));
const SignUp = lazy(() => import('./Components/auth/signup/index'));
const Forgot = lazy(() => import('./Components/auth/forgot/index'));
const Reset = lazy(() => import('./Components/auth/reset/index'));
const ConfirmEmail = lazy(() => import('./Components/auth/confirmEmail/index'));
const ContestSkeletonContainer = lazy(() => import('./Components/drawer/contests/common/ContestPageSkeletonContainer'));
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
const HomePage = lazy(() => import('./Components/homePage'));
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
const SuperuserFeedbacks = lazy(() => import('./Components/superuser/feedback/index'));
const SuperuserBlogs = lazy(() => import('./Components/superuser/blogs/index'));
const SuperuserCreateContest = lazy(() => import('./Components/superuser/createContest/index'));
const SuperuserEditContest = lazy(() => import('./Components/superuser/editContest/index'));
const PageNotFound = lazy(() => import('./Components/common/PageNotFound/index'));

const Routes = () => {
  const {
    loading, error, data,
  } = useQuery(GET_LOGGED_IN_USER);
  // running the query to the server to check if the user is already logged in or not
  if (loading) return <Spinner />;
  if (error) return <SomethingWentWrong message="An error has been encountered." />;

  if (data.getLoggedInUser) {
    // Updating the authState with details of the loggedInUser provided by the server
    const authState = {
      user: {
        ...data.getLoggedInUser,
      },
    };
    // We have wrapped the entire App under the query and hence whenever the loggedInUser wil change
    // the entire app will re render
    return (
      <AuthContext.Provider value={{ authState }}>
        <ErrorBoundary getLoggedInUser={data.getLoggedInUser}>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
              {/*
                  Here we are not using exact pnprop for components like AppBar and Footer,
                  meaning they will be rendered whenever their paths are matched with
                  some part of the URL. Hence in our case, AppBar and Footer will be rendered
                  on all the pages which has REACT_APP_BASE_ADDRESS in their URL
              */}
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
                  <Route path="/" exact component={HomePage} />
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
                  <PrivateRoute path="/superuser/blogs" exact component={SuperuserBlogs} />
                  <PrivateRoute path="/superuser/feedbacks" exact component={SuperuserFeedbacks} />
                  <PrivateRoute path="/superuser/contests/create" exact component={SuperuserCreateContest} />
                  <PrivateRoute path="/superuser/contests/:contestId/edit" exact component={SuperuserEditContest} />
                  <PrivateRoute path="/superuser/ratings/:contestId/update" exact component={SuperuserUpdateRatings} />
                  <Route path="*" component={PageNotFound} />
                </Switch>
              </Suspense>
              <Route path="/" render={() => <Footer />} />
            </ScrollToTop>
          </BrowserRouter>
        </ErrorBoundary>
      </AuthContext.Provider>
    );
  }

  // Random errors
  return <SomethingWentWrong message="An unexpected error has occured" />;
};

export default Routes;
