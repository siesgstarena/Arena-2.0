import { gql } from 'apollo-boost';

export const GET_USER_DETAILS_ON_LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      userId
      name
      email
    }
  }
`;

export const GET_IS_USER_ADMIN = gql`
  query IsAdmin($code: String!) {
    isAdmin(code: $code) {
      isAdmin
      message
      success
      code
    }
  }
`;

export const GET_USER_EMAIL = gql`
  query UserById($_id: ID!) {
    userById(_id: $_id) {
      email
    }
  }
`;

export const RESEND_OTP = gql`
  query ResendOtp($userId: ID!) {
    resendOtp(userId: $userId) {
      code
      success
      message
    }
  }
`;
export const FORGOT_PASSWORD_MAIL = gql`
  query ForgotPasswordMail($email: String!) {
    forgotPasswordMail(email: $email) {
      code
      success
      message
    }
  }
`;

export const GET_ADMIN_DASHBOARD_DETAILS = gql`
  query AdminDashboard($code: String!) {
    adminDashboard(code: $code) {
      code
      success
      message
      contest {
        startsAt
        endsAt
        name
        announcement
      }
      problems {
        name
        points
        code
      }
      totalCount
      acceptedCount
      usersCount
    }
  }
`;

export const GET_CONTEST_ANNOUNCEMENT = gql`
  query AdminDashboard($code: String!) {
    adminDashboard(code: $code) {
      contest {
        announcement
      }
      code
      success
      message
    }
  }
`;

export const GET_PROBLEM_DETAILS = gql`
  query ProblemByCode($code: ID!) {
    problemByCode(code: $code) {
      _id
      name
      code
      points
      description
      explainInput
      explainOutput
      constraints
      example
      explanation
      inputFile
      outputFile
      tags
    }
  }
`;

export const GET_ALL_RATINGS = gql`
  query Ratings($limit: Int, $skip: Int) {
    ratings(limit: $limit, skip: $skip) {
      pages
      users {
        name
        ratings
        _id
      }
      ratingsUpdatedTill
    }
  }
`;

export const GET_CONTEST_HOMEPAGE_DETAILS = gql`
  query {
    contests {
      contests {
        name
        code
        startsAt
        endsAt
        contestAdmin {
          _id
          name
          ratings
        }
      }
      finishedContests {
        name
        code
        startsAt
        endsAt
        contestAdmin {
          _id
          name
          ratings
        }
      }
    }
  }
`;

export const GET_ALL_BLOGS = gql`
  query Blogs($limit: Int, $skip: Int) {
    blogs(limit: $limit, skip: $skip) {
      blogs {
        _id
        userId {
          name
          username
          ratings
          _id
        }
        pinned
        title
        tags
        createdAt
        updatedAt
        timeToRead
      }
      pages
    }
  }
`;

export const GET_PROBLEM_SET = gql`
  query ProblemSet {
    problemSet {
      problemDetails {
        _id
        code
        points
        name
        tags
        contest {
          code
        }
      }
      attempts
      solved
    }
  }
`;

export const GET_SCOREBOARD_BY_CONTEST_CODE = gql`
  query Scoreboard($code: String!) {
    scoreboard(code: $code) {
      problems {
        code
      }
      scoreboard {
        userId
        user {
          username
          ratings
        }
        total
        solved
        totalTime
        submissions {
          code
          solved
          attempts
        }
      }
    }
  }
`;

export const GET_CONTEST_DETAILS = gql`
  query ContestCode($code: String!) {
    contestCode(code: $code) {
      name
      description
      endsAt
      announcement
    }
  }
`;

export const GET_BLOG_BY_ID = gql`
  query BlogById($id: ID!) {
    blogById(_id: $id) {
      blog {
        userId {
          _id
          name
        }
        title
        timeToRead
        content
        tags
        createdAt
        updatedAt
      }
    }
  }
`;

export const GET_PROBLEMS_BY_CONTEST_CODE = gql`
  query ProblemsByContestCode($contestCode: String!) {
    problemsByContestCode(contestCode: $contestCode) {
      _id
      code
      name
      points
    }
  }
`;

export const GET_SUBMISSION_BY_CONTEST_CODE = gql`
  query SubmissionByContestCode(
    $contestCode: String!
    $limit: Int
    $skip: Int
    $userId: String
    $problemCode: String
    $status: String
    $language: String
  ) {
    submissionsByContestCode(
      contestCode: $contestCode
      limit: $limit
      skip: $skip
      where: { userId: $userId, problemCode: $problemCode, status: $status, language: $language }
    ) {
      code
      success
      message
      pages
      submissionsVisible
      submissions {
        _id
        userId {
          username
          _id
          ratings
        }
        contestId {
          name
        }
        problemId {
          name
          code
        }
        time
        createdAt
        status
        language
        time
        memory
        plagiarism
      }
    }
    problemsByContestCode(contestCode: $contestCode) {
      name
      _id
      code
    }
  }
`;

export const GET_SUBMISSION_PAGE_DETAILS = gql`
  query SubmissionById($id: ID!) {
    submissionById(_id: $id) {
      success
      code
      message
      submission {
        _id
        userId {
          username
          _id
          ratings
        }
        contestId {
          name
        }
        problemId {
          code
          name
          outputFile
          inputFile
        }
        status
        time
        createdAt
        status
        language
        time
        memory
        fileContent
        output
        duringContest
        plagiarism
      }
      outputLink
      expectedOutputLink
    }
  }
`;

export const GET_CONTEST_DASHBOARD = gql`
  query Dashboard($code: String!) {
    dashboard(code: $code) {
      problemDetails {
        code
        points
        name
      }
      attempts
      solved
    }
  }
`;

export const GET_RATINGS_CHANGE = gql`
  query RatingChanges($code: String!) {
    ratingChanges(code: $code) {
      newRatings {
        newRating
      }
      oldRating {
        newRating
      }
      user {
        username
        ratings
        _id
      }
    }
  }
`;

export const GET_CONTEST_EDIT_DETAILS = gql`
  query ContestCode($code: String!) {
    contestCode(code: $code) {
      _id
      code
      name
      type
      description
      startsAt
      endsAt
      solutionVisibility
      contestAdmin {
        name
        _id
        username
      }
    }
  }
`;

export const GET_ALL_CONTEST_DETAILS = gql`
  query AllContests($skip: Int, $limit: Int) {
    allContests(skip: $skip, limit: $limit) {
      pageCount
      contests {
        name
        code
        _id
        startsAt
        endsAt
      }
    }
  }
`;

export const GET_ALL_CONTEST_NAMES = gql`
  query AllContests($skip: Int, $limit: Int) {
    allContests(skip: $skip, limit: $limit) {
      contests {
        name
        code
        _id
      }
    }
  }
`;

export const GET_ALL_USERS = gql`
  query Users {
    users {
      _id
      name
      username
    }
  }
`;

export const IS_SUPERUSER = gql`
  query IsSuperuser {
    isSuperuser {
      isSuperuser
      success
      code
      message
    }
  }
`;

export const GET_NEW_RATINGS = gql`
  query CalculateNewRatings($code: String!) {
    calculateNewRatings(code: $code) {
      newRating
      user {
        username
        _id
        ratings
      }
      contestId
    }
  }
`;

export const GET_PROFILE_DETAILS = gql`
  query ProfilePage($findBy: FindBy!, $id: ID, $username: String) {
    profilePage(findBy: $findBy, _id: $id, username: $username) {
      user {
        name
        ratings
        _id
        username
        about
        email
        followers
        createdAt
        following
        github
        codechef
        codeforces
        activities
        updates
      }
      changes
      contests
    }
  }
`;

export const GET_SUBMISSION_BY_USER_ID = gql`
  query SubmissionsByUserId($id: ID!, $limit: Int, $skip: Int) {
    submissionsByUserId(_id: $id, limit: $limit, skip: $skip) {
      pages
      submissions {
        _id
        problemId {
          code
          name
          contestCode
        }
        language
        status
        plagiarism
      }
    }
  }
`;

export const GET_BLOGS_BY_USER = gql`
  query BlogByUser($id: String!, $limit: Int, $skip: Int) {
    blogByUser(userId: $id, limit: $limit, skip: $skip) {
      blogs {
        _id
        title
        tags
        timeToRead
        createdAt
        updatedAt
        userId {
          _id
          ratings
        }
      }
      pages
    }
  }
`;

export const GET_BLOG_BY_BLOG_ID = gql`
  query BlogById($id: ID!) {
    blogById(_id: $id) {
      blog {
        _id
        userId {
          name
          _id
          ratings
        }
        title
        timeToRead
        createdAt
        updatedAt
        content
        tags
        upvote
        downvote
      }
    }
  }
`;

export const GET_COMMENTS_OF_BLOG = gql`
  query Comments($id: String!, $limit: Int, $skip: Int) {
    comments(where: { postId: $id }, skip: $skip, limit: $limit)
      @connection(key: "comments", filter: ["where"]) {
      comments {
        _id
        userId {
          name
          ratings
          _id
        }
        upvote
        downvote
        content
        createdAt
      }
      totalNumberOfComments
    }
  }
`;

export const GET_LOGGED_IN_USER = gql`
  query GetLoggedInUser {
    getLoggedInUser {
      name
      userId
      email
    }
  }
`;

export const GET_SEARCH_RESULTS = gql`
  query GetSearchResults($text: String!) {
    search(text: $text) {
      users {
        name
        about
        _id
        ratings
        followers
        following
        createdAt
      }
      blogs {
        title
        _id
        tags
        timeToRead
        createdAt
        userId {
          name
          _id
          ratings
        }
      }
      problems {
        name
        code
        contestCode
        tags
        points
      }
    }
  }
`;

export const GET_ALL_FEEDBACKS = gql`
  query {
    feedbacks {
      _id
      name
      email
      message
      replied
    }
  }
`;
