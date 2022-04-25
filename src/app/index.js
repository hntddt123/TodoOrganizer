import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';

import App from './components/App';
import { store } from '../app/redux/store/store';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);