import { gql } from "@apollo/client";

const GET_TOKEN_EMAIL = gql`
  mutation getTokenEmail($email: String!) {
    getTokenEmail(email: $email)
  }
`;
