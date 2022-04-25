import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from './Dashboard';
import Navigation from './Navigation';
import TaskDetail from './TaskDetail';
import LoginPage from './LoginPage';

import { NOT_AUTHENTICATED } from '../redux/actions/authActionType';

const AuthRequired = ({ session, children }) => {
  console.info(`session authenticated: ${session.authenticated}, location: ${location.pathname}`);

  if (session.authenticated === NOT_AUTHENTICATED) {
    return <Navigate to="/" replace />;
  }

  return children;
}

function App() {
  const session = useSelector((state) => state.sessionReducer);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path='/'
          element={<LoginPage />}
        />
        <Route
          path='/dashboard'
          element={<AuthRequired session={session}><Dashboard /></AuthRequired>}
        />
        <Route
          path='/task/:id'
          element={<AuthRequired session={session}><TaskDetail /></AuthRequired>}
        />
        <Route
          path='*'
          element={<div><h2>Quite Empty Here</h2></div>}
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
