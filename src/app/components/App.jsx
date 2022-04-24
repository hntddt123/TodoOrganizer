import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Navigation from './Navigation';
import TaskDetail from './TaskDetail';

import { store } from '../redux/store/store';
import { history } from '../redux/store/history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route
            exact
            path='/dashboard'
            element={<Dashboard />}
          />
          <Route
            exact
            path='/task/:id'
            element={<TaskDetail />}
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
