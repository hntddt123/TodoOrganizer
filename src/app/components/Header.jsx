import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='font-mono text-4xl text-primary hover:text-lime-500 text-center m-2'>
      <Link to='/'>
        <h1>
          TodoList
        </h1>
      </Link>
    </div>
  );
}

export default Header;
