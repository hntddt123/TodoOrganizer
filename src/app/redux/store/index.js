import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers/rootReducers';
import { createLogger } from 'redux-logger';

export const store = configureStore(
  {
    reducer: rootReducer,
    middleware: [createLogger()]
  }
);