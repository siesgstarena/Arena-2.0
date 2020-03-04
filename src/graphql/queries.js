import { gql } from 'apollo-boost';

export const GET_USER_ID = gql`
query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    userId
  }
}  
`;

export const GET_USER = gql`
query Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    userId
  }
}  
`;

export const GET_CONTEST_ADMIN_EMAIL_USER_EMAIL = gql`
query ContestAdminEmailUserEmail($contestId: String!, $userId: String!) {
  contestCode(code: $contestId) {
    contestAdmin {
      email
    }   
  }
  userById(_id: $userId) {
    email
  }
}
`;
