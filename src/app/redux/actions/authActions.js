import { createAction } from '@reduxjs/toolkit';
import {
  REQUEST_AUTHENTICATE_USER,
  PROCESSING_AUTHENTICATE_USER,
  AUTHENTICATING,
  LOAD_DB_STATE
} from './authActionType';

export const requestAuthenticateUser = createAction(REQUEST_AUTHENTICATE_USER,
  (email, password) => ({
    payload: {
      email: email,
      password: password
    }
  })
);

export const processAuthenticateUser = createAction(PROCESSING_AUTHENTICATE_USER,
  (status = AUTHENTICATING, session) => ({
    payload: {
      session: session,
      authenticated: status
    }
  })
);

export const loadDBState = createAction(LOAD_DB_STATE,
  (data) => ({
    payload: {
      state: data
    }
  })
);
