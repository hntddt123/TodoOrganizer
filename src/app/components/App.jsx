import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

import Dashboard from './Dashboard';
import Header from './Header';
import TaskDetail from './TaskDetail';
import LoginPage from './LoginPage';

import { AUTHENTICATED } from '../redux/actions/authActionType';

function AuthRequired({ children }) {
  const session = useSelector((state) => state.sessionReducer);
  const location = useLocation();

  console.log(`authenticated status: ${session.authenticated}
location: ${location.pathname}`);
  if (session.authenticated === AUTHENTICATED) {
    return children;
  }
  return <Navigate to='/' replace />;
}

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/dashboard'
          element={<AuthRequired><Dashboard /></AuthRequired>}
        />
        <Route
          path='/task/:id'
          element={<AuthRequired><TaskDetail /></AuthRequired>}
        />
        <Route
          path='*'
          element={<div><h2 className='text-xl text-white'>Quite Nothing TODO Here</h2></div>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
