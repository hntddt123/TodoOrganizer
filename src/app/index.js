import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import Dashboard from './components/Dashboard';

import { store } from './server/redux/store/index';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Dashboard />
    </Provider>
  </React.StrictMode>
);