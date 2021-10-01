import { gql } from '@apollo/client';

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
      books {
        name
        genre
        id
      }
    }
  }
`;

const getAuthorQuery = gql`
  query GetAuthor($id: ID) {
    author(id: $id) {
      id
      name
      books {
        id
        name
        genre
      }
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
      books {
        id
        name
        genre
      }
    }
  }
`;

export {
  getAuthorsQuery,
  getAuthorQuery,
  addAuthorMutation,
  deleteAuthorMutation,
};
