import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';
import { schema } from './schema';
import connectDB from './database/config';

const app = express();

// allow cross-origin requests
app.use(cors());

// Connect to database
connectDB();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(5000, () => {
  console.log('now listening for requests on port 5000');
});
