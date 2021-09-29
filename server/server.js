const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');
const schema = require('./schema/schema');
const connectDB = require('./database/config');

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
