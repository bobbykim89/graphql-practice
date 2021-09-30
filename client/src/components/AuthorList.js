import React from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/authorQuery';

const AuthorList = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <ul id='book-list'>
        {data.authors.map((author) => (
          <li key={author.id}>
            {author.name} <button className='deleteBtn'>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthorList;
