import { GraphQLObjectType, GraphQLString, GraphQLID } from 'graphql';
import Book from '../../models/book';
import Author from '../../models/author';
import AuthorType from './AuthorType';

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    author: {
      type: AuthorType,
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      },
    },
  }),
});

export default BookType;
