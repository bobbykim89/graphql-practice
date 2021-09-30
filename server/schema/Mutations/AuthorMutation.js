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
import AuthorType from '../Types/AuthorType';

export const ADD_AUTHOR = {
  type: AuthorType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: new GraphQLNonNull(GraphQLInt) },
  },
  async resolve(parent, args) {
    let author = new Author({
      name: args.name,
      age: args.age,
    });
    return await author.save();
  },
};

export const DELETE_AUTHOR = {
  type: AuthorType,
  args: { id: { type: GraphQLID } },
  async resolve(parent, args) {
    return await Author.findByIdAndDelete(args.id);
  },
};
