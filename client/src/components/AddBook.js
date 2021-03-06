import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { addBookMutation, getBooksQuery } from '../queries/bookQuery';

import { getAuthorsQuery } from '../queries/authorQuery';

const AddBook = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [addBook] = useMutation(addBookMutation);

  const [bookInfo, setBookInfo] = useState({
    name: '',
    genre: '',
    authorId: '',
  });

  const { name, genre } = bookInfo;

  const onChange = (e) => {
    setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookInfo.authorId === '') {
      return console.log('Author cannot be blank');
    } else {
      addBook({
        variables: {
          name: bookInfo.name,
          genre: bookInfo.genre,
          authorId: bookInfo.authorId,
        },
        refetchQueries: [{ query: getBooksQuery }],
      });
      setBookInfo({
        name: '',
        genre: '',
        authorId: '',
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <form id='add-book' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='bookName'>Book Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            id='bookName'
            onChange={onChange}
            required
          />
        </div>
        <div className='field'>
          <label htmlFor='bookGenre'>Genre:</label>
          <input
            type='text'
            name='genre'
            value={genre}
            id='bookGenre'
            onChange={onChange}
            required
          />
        </div>
        <div className='field'>
          <label htmlFor='bookAuthor'>Author:</label>
          <select name='authorId' id='bookAuthor' onChange={onChange} required>
            {loading ? (
              <option>Loading Authors..</option>
            ) : (
              <>
                <option>Select author</option>
                {data.authors.map((author) => (
                  <option key={author.id} value={author.id}>
                    {author.name}
                  </option>
                ))}
              </>
            )}
          </select>
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddBook;
