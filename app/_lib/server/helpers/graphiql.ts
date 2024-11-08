export const defaultQuery = `
# Welcome to the GraphQL playground!
query FetchCourses {
  courses {
    title
    description
    slug
    status
  }
}

mutation Logout {
  endSession
}

mutation Login($email: String!, $password: String!) {
  authenticatePersonWithPassword(email: $email, password: $password) {
    ... on PersonAuthenticationWithPasswordSuccess {
      sessionToken
      item {
        email
      }
    }
    ... on PersonAuthenticationWithPasswordFailure {
      message
    }
  }
}
`;
