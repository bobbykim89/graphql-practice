import { gql } from '@apollo/client';

const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const getBookQuery = gql`
  query GetBook($id: ID) {
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      name
      id
    }
  }
`;

const editBookMutation = gql`
  mutation EditBook($id: ID!, $name: String!, $genre: String!) {
    editBook(id: $id, name: $name, genre: $genre) {
      id
      name
      genre
    }
  }
`;

const deleteBookMutation = gql`
  mutation DeleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      name
      genre
    }
  }
`;

const deleteBooksMutation = gql`
  mutation DeleteBooks($authorId: ID!) {
    deleteBooks(authorId: $authorId) {
      id
      name
      genre
    }
  }
`;

export {
  getBooksQuery,
  addBookMutation,
  getBookQuery,
  editBookMutation,
  deleteBookMutation,
  deleteBooksMutation,
};
