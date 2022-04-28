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
      navigate('/dashboard', { replace: true });
    }
  }, [session.authenticated]);

  const loginHandler = useCallback((e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(requestAuthenticateUser(username, password));
  }, [dispatch]);

  return (
    <div className='card grid grid-cols-1 bg-lime-200 justify-items-center m-3 p-3'>
      <h2 className='text-center text-3xl m-3 p-3'>Login to your organizer</h2>
      <form onSubmit={loginHandler}>
        <div>
          <input
            className='shadow-sm rounded-lg mt-3 p-3'
            type='text'
            placeholder='username'
            name='username'
            defaultValue='Dev'
          />
        </div>
        <div>
          <input
            className='shadow-sm rounded-lg mt-3 mb-3 p-3'
            type='password'
            placeholder='password'
            name='password'
            defaultValue=''
          />
        </div>
        <div>
          <div>
            {session.authenticated === NOT_AUTHENTICATED
              ? <p className='text-center text-base text-red-500 animate-bounceOnce duration-300'>User or Password incorrect</p>
              : null}
          </div>
          <button
            className='text-xl bg-secondary hover:bg-lime-500 rounded-xl
            transition-all duration-200 ease-in mt-3 mb-3 p-3'
            type='submit'
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
