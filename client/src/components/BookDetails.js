import React, { Fragment } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
  deleteBookMutation,
  getBookQuery,
  getBooksQuery,
} from '../queries/bookQuery';

const BookDetails = ({ selected, setSelected }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: selected },
  });

  const [deleteBook] = useMutation(deleteBookMutation);

  const book = data && data.book;

  const handleDelete = (e) => {
    deleteBook({
      variables: { id: selected },
      refetchQueries: [{ query: getBooksQuery }],
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
    <div id='book-details'>
      {book === null ? (
        <p>No book selected</p>
      ) : (
        <div>
          {book && (
            <Fragment>
              <h2>{book.name}</h2>
              <p>{book.genre}</p>
              <p>{book.author.name}</p>
              <p>All books by this author:</p>
              <ul className='other-books'>
                {book.author.books.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </Fragment>
          )}
          <button onClick={handleDelete}>Delete Book</button>
        </div>
      )}
    </div>
  );
};

export default BookDetails;
