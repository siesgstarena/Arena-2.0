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

// export const GET_ALL_USER_DETAILS = gql`
// query GetAllUserDetails($email: String!, $password: String!) {
//   login(email: $email, password: $password) {
//     userId
//   }
// }
// `;

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
  forgotPasswordMail(email: $email){
    code
    success
    message
  }
}
`;

export const GET_ADMIN_DASHBOARD_DETAILS = gql`
query AdminDashboard($code: String!) {
  adminDashboard(code:$code) {
    code
    success
    message
    contest {
      startsAt
      endsAt
      name
      announcement
    }
    problems{
      _id
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
  adminDashboard(code: $code){
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
  problemByCode(code: $code){
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

export const GET_RESET_SUBMISSION_DETAILS = gql`
query SubmssionsByContestCode($contestCode: String!, $problemCode: String, $limit: Int, $skip: Int) {
  submissionsByContestCode(contestCode:$contestCode, where:{problemCode:$problemCode}, limit: $limit, skip: $skip){
    submissions {
      userId{
        username
        _id
      }
      contestId {
        name
      }
      problemId {
        _id
        name
      }
      status
      language
      createdAt
      _id
    }
    code
    message
    success
    pages
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
  contests{
    contests{
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
    finishedContests{
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
  problemSet{
    problemDetails {
      _id
      code
      points
      name
      tags
      contest{
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
  scoreboard(code:$code){
    problems{
      code
    }
    scoreboard{
      userId
      user{
        username
        ratings
      }
      total
      solved
      totalTime
      submissions{
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
  contestCode(code:$code){
    name
    description
    endsAt
    announcement
  }
}
`;

export const GET_BLOG_BY_ID = gql`
query BlogById($id: ID!) {
  blogById(_id:$id){
    blog {
      userId{
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
  problemsByContestCode(contestCode: $contestCode){
    _id
    code
    name
    points
  }
}
`;

export const GET_CONTEST_STATUS = gql`
query SubmissionByContestCode($contestCode: String!, $limit: Int, $skip: Int, $userId: String, $problemCode: String, $status: String, $language: String) {
  submissionsByContestCode(contestCode: $contestCode, limit: $limit, skip: $skip, where: { userId: $userId, problemCode: $problemCode, status: $status, language: $language }){
    code
    success
    message
    pages
    submissionsVisible
    submissions {
      _id
      userId{
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
  submissionById(_id:$id){
    success
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
    }
    outputLink
    expectedOutputLink
  }
}
`;

export const GET_CONTEST_DASHBOARD = gql`
query Dashboard($code: String! ) {
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
query RatingChanges($code: String!){
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
query ContestCode($code: String!){
  contestCode(code:$code){
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
   users {
    _id
    name
    username
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
