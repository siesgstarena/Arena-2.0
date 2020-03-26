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
