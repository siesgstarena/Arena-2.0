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
