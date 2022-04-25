
import { createReducer } from '@reduxjs/toolkit';
import {
  requestAuthenticateUser,
  processAuthenticateUser
} from '../actions/authActions';
import {
  AUTHENTICATING
} from '../actions/authActionType';

const defaultAuthentication = {
  authenticated: false
};

export const sessionReducer = createReducer(defaultAuthentication, (builder) => {
  builder
    .addCase(requestAuthenticateUser, (state, action) => {
      return {
        ...state,
        authenticated: AUTHENTICATING
      }
    })
    .addCase(processAuthenticateUser, (state, action) => {
      state.authenticated = action.payload.authenticated;
    }
    );
});