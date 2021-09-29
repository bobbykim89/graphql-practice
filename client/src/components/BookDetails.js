import React, { Fragment } from 'react';
import { useQuery } from '@apollo/client';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ selected }) => {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: selected },
  });

  const book = data && data.book;

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
                  <li key-={item.id}>{item.name}</li>
                ))}
              </ul>
            </Fragment>
          )}
        </div>
      )}
    </div>
  );
};

export default BookDetails;
