import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className='font-mono text-4xl text-lime-400 text-center m-2'>
      <Link to='/'>
        <h1>
          TodoList
        </h1>
      </Link>
    </div>
  );
}

export default Navigation;
