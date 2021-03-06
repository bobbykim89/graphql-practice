import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/bookQuery';
import BookDetails from './BookDetails';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  const [selected, setSelected] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <h1>Book List</h1>
      <ul id='book-list'>
        {data.books.map((book) => (
          <li key={book.id} onClick={() => setSelected(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default BookList;
