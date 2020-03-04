import { gql } from 'apollo-boost';

const SIGN_UP = gql`
  mutation Signup($name: String!, $username: String!, $email: String!, $password: String!) {
    signup(email: $email, username: $username, name: $name,  password: $password) {
      code
      success
      message
    }
  }  
`;

export default SIGN_UP;
