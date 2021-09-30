import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;

const addAuthorMutation = gql`
  mutation AddAuthor($name: String!, $age: Int!) {
    addAuthor(name: $name, age: $age) {
      name
      age
    }
  }
`;

const deleteAuthorMutation = gql`
  mutation DeleteAuthor($id: ID!) {
    deleteAuthor(id: $id) {
      id
      name
      age
    }
  }
`;

export { getAuthorsQuery, addAuthorMutation, deleteAuthorMutation };
