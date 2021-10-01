import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>
          <span>Reading List</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to='/author'>
              <span>Authors</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
