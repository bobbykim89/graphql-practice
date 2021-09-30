import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';

// apollo client setup

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div id='main'>
          <Switch>
            <Route exact path='/'>
              <h1>Reading List</h1>
              <BookList />
              <AddBook />
            </Route>
            <Route exact path='/author' component={AddAuthor} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
