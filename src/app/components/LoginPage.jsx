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
      // console.log('Not Authenticated');
    }
  }, [session.authenticated]);

  const loginHandler = useCallback((e) => {
    e.preventDefault();

    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(requestAuthenticateUser(username, password));
  }, [dispatch]);

  return (
    <div className='grid grid-cols-1 justify-items-center card m-3 p-3 border-2'>
      <h2 className='text-center text-3xl m-3 p-3'>Login to your organizer</h2>
      <form onSubmit={loginHandler} >
        <div>
          <input
            className='shadow-sm rounded-lg m-3 p-3 border-2'
            type='text'
            placeholder='username'
            name='username'
            defaultValue='Dev'
          />
        </div>
        <div>
          <input
            className='shadow-sm rounded-lg m-3 p-3 border-2'
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
              : null
            }
          </div>
          <button
            className='text-xl bg-secondary hover:bg-lime-500 rounded-xl 
            transition-all duration-200 ease-in m-3 p-3'
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