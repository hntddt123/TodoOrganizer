import React from 'react';
import { Provider } from 'react-redux';


import Dashboard from './Dashboard';

import { store } from '../../redux/store/index';

function App() {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
}
export default App;