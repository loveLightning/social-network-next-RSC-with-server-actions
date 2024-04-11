import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($loginInput: LoginInput!) {
    login(loginInput: $loginInput) {
      accessToken
    }
  }
`;

export const REGISTER = gql`
  mutation Register($registerInput: RegisterInput!) {
    register(registerInput: $registerInput) {
      accessToken
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation RefreshToken {
    refresh {
      accessToken
    }
  }
`;

export const LOGOUT = gql`
  mutation Logout {
    logout
  }
`;
