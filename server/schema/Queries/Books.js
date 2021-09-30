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
import BookType from '../Types/BookType';

export const GET_BOOK_BY_ID = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  resolve(parent, args) {
    return Book.findById(args.id);
  },
};

export const GET_ALL_BOOKS = {
  type: new GraphQLList(BookType),
  resolve(parent, args) {
    // return books;
    return Book.find({});
  },
};
