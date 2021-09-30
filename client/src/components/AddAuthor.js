import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addAuthorMutation, getAuthorsQuery } from '../queries/authorQuery';

const AddAuthor = () => {
  const [addAuthor] = useMutation(addAuthorMutation);

  const [authorInfo, setAuthorInfo] = useState({
    name: '',
    age: '',
  });

  const { name, age } = authorInfo;

  const onChange = (e) => {
    setAuthorInfo({ ...authorInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor({
      variables: {
        name: authorInfo.name,
        age: parseInt(authorInfo.age),
      },
      refetchQueries: [{ query: getAuthorsQuery }],
    });
    setAuthorInfo({
      name: '',
      age: '',
    });
  };

  return (
    <div>
      <form id='add-author' onSubmit={handleSubmit}>
        <div className='field'>
          <label htmlFor='authorName'>Author Name:</label>
          <input
            type='text'
            name='name'
            value={name}
            id='authorName'
            onChange={onChange}
            required
          />
        </div>
        <div className='field'>
          <label htmlFor='authorAge'>Age:</label>
          <input
            type='number'
            name='age'
            value={age}
            id='authorAge'
            onChange={onChange}
            required
          />
        </div>
        <button>+</button>
      </form>
    </div>
  );
};

export default AddAuthor;
