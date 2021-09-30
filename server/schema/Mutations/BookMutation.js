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

export const ADD_BOOK = {
  type: BookType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLID) },
  },
  async resolve(parent, args) {
    let book = new Book({
      name: args.name,
      genre: args.genre,
      authorId: args.authorId,
    });
    return await book.save();
  },
};

export const EDIT_BOOK = {
  type: BookType,
  args: {
    id: { type: GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: new GraphQLNonNull(GraphQLString) },
  },
  async resolve(parent, args) {
    let book = Book.findById(args.id);
    book = await Book.findByIdAndUpdate(
      args.id,
      { name: args.name, genre: args.genre },
      { new: true }
    );
    return book;
  },
};

export const DELETE_BOOK = {
  type: BookType,
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    return await Book.findByIdAndDelete(args.id);
  },
};
