import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { requestAuthenticateUser } from '../redux/actions/authActions';
import { AUTHENTICATED, NOT_AUTHENTICATED } from '../redux/actions/authActionType';

function LoginPage() {
  const session = useSelector((state) => state.sessionReducer);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (session.authenticated === AUTHENTICATED) {
      navigate('/dashboard');
    } else {
      console.log('Not Authenticated');
    }
  }, [session.authenticated]);

  const loginHandler = useCallback((e) => {
    e.preventDefault();

    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(requestAuthenticateUser(username, password));
  }, [dispatch]);

  return (
    <div>
      <h2>User Login</h2>
      <form onSubmit={loginHandler}>
        <div>
          <input
            type='text'
            placeholder='username'
            name='username'
            defaultValue='Dev'
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='password'
            name='password'
            defaultValue=''
          />
        </div>
        <div>
          {session.authenticated === NOT_AUTHENTICATED
            ? <p>User or Password incorrect</p>
            : null
          }
          <button type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;