import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import {
  editBookMutation,
  getBookQuery,
  getBooksQuery,
} from '../queries/bookQuery';

const EditBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const [values, setValues] = useState({
    name: '',
    genre: '',
  });
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id: id },
  });
  const [editBook] = useMutation(editBookMutation);

  useEffect(() => {
    setValues({
      name: data && data.book.name,
      genre: data && data.book.genre,
    });
    // eslint-disable-next-line
  }, []);

  const { name, genre } = values;

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      variables: {
        id: id,
        name: name,
        genre: genre,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
    history.push('/');
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <h1>Edit {data.book.name}</h1>
      <form id='edit-book' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='editName'>Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            id='editName'
            onChange={onChange}
          />
        </div>
        <div className='field'>
          <label htmlFor='editGenre'>Genre:</label>
          <input
            type='text'
            name='genre'
            value={genre}
            id='editGenre'
            onChange={onChange}
          />
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default EditBook;
