import { GraphQLObjectType, GraphQLSchema } from 'graphql';

// Import queries
import { GET_BOOK_BY_ID, GET_ALL_BOOKS } from './Queries/Books';
import { GET_AUTHOR_BY_ID, GET_ALL_AUTHORS } from './Queries/Authors';
import { ADD_BOOK, DELETE_BOOK, EDIT_BOOK } from './Mutations/BookMutation';
import { ADD_AUTHOR, DELETE_AUTHOR } from './Mutations/AuthorMutation';

// Import Mutations

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: GET_BOOK_BY_ID,
    books: GET_ALL_BOOKS,
    author: GET_AUTHOR_BY_ID,
    authors: GET_ALL_AUTHORS,
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: ADD_AUTHOR,
    deleteAuthor: DELETE_AUTHOR,
    addBook: ADD_BOOK,
    editBook: EDIT_BOOK,
    deleteBook: DELETE_BOOK,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
