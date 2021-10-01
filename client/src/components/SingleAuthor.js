import React, { Fragment } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  deleteAuthorMutation,
  getAuthorQuery,
  getAuthorsQuery,
} from '../queries/authorQuery';
import { deleteBooksMutation, getBooksQuery } from '../queries/bookQuery';

const SingleAuthor = ({ selected, setSelected }) => {
  const { loading, error, data } = useQuery(getAuthorQuery, {
    variables: { id: selected },
  });
  const [deleteAuthor] = useMutation(deleteAuthorMutation);
  const [deleteBooks] = useMutation(deleteBooksMutation);

  const author = data && data.author;

  const handleDelete = (e) => {
    if (author.books.length !== 0) {
      deleteBooks({
        variables: { authorId: selected },
        refetchQueries: [{ query: getBooksQuery }],
      });
    }
    deleteAuthor({
      variables: { id: selected },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
    setSelected(null);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div id='author-details'>
      {author === null ? (
        <p>No author selected</p>
      ) : (
        <div>
          {author && (
            <Fragment>
              <h2>{author.name}</h2>
              <p>All books by this author:</p>
              <ul className='other-books'>
                {author.books.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </Fragment>
          )}
          <button onClick={handleDelete}>Delete Author</button>
        </div>
      )}
    </div>
  );
};

export default SingleAuthor;
