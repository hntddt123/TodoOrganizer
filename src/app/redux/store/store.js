import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { usersReducer } from '../reducers/usersReducer';
import { groupsReducer } from '../reducers/groupsReducer';
import { tasksReducer } from '../reducers/tasksReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import * as sagas from '../actions/sagas.mock';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore(
  {
    reducer: { 
      usersReducer, 
      groupsReducer, 
      tasksReducer,  
      commentsReducer
    },
    middleware: [createLogger(), sagaMiddleware]
  }
);

for (let saga in sagas) {
  sagaMiddleware.run(sagas[saga]);
}
