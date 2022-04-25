import { createAction } from '@reduxjs/toolkit';
import {
  REQUEST_AUTHENTICATE_USER,
  PROCESSING_AUTHENTICATE_USER,
  AUTHENTICATING
} from './authActionType';

export const requestAuthenticateUser = createAction(REQUEST_AUTHENTICATE_USER,
  (username, password) => ({
    payload: {
      username: username,
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
