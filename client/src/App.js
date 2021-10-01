import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import AddAuthor from './components/AddAuthor';
import AuthorList from './components/AuthorList';
import Navbar from './components/Layouts/Navbar';
import EditBook from './components/EditBook';

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
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <BookList />
              <AddBook />
            </Route>
            <Route exact path='/author'>
              <AuthorList />
              <AddAuthor />
            </Route>
            <Route path='/edit/:id' component={EditBook} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
