import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import Book from '../../models/book';
import Author from '../../models/author';
import AuthorType from '../Types/AuthorType';

export const GET_AUTHOR_BY_ID = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    // return _.find(authors, { id: args.id });
    return Author.findById(args.id);
  },
};

export const GET_ALL_AUTHORS = {
  type: new GraphQLList(AuthorType),
  resolve(parent, args) {
    // return authors;
    return Author.find({});
  },
};
