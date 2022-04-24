import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Dashboard from './Dashboard';
import Navigation from './Navigation';

import { store } from '../redux/store/store';
import { history } from '../redux/store/history';

function App() {
  return (
    <BrowserRouter history={history}>
      <Provider store={store}>
        <Navigation />
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
