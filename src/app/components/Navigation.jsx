import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div>
      <Link to='/dashboard'>
        <h1>
          TodoList
        </h1>
      </Link>
    </div>
  );
}

export default Navigation;
