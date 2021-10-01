import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { getAuthorsQuery } from '../queries/authorQuery';
import SingleAuthor from './SingleAuthor';

const AuthorList = () => {
  const { loading, error, data } = useQuery(getAuthorsQuery);
  const [selected, setSelected] = useState(null);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <div>
      <h1>Author List</h1>
      <ul id='author-list'>
        {data.authors.map((author) => (
          <li key={author.id} onClick={() => setSelected(author.id)}>
            {author.name}{' '}
          </li>
        ))}
      </ul>
      <SingleAuthor selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default AuthorList;
