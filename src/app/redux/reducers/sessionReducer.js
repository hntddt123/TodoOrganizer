
import { createReducer } from '@reduxjs/toolkit';
import {
  requestAuthenticateUser,
  processAuthenticateUser,
  loadDBState
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
    })
    .addCase(loadDBState, (state, action) => {
      const { id } = action.payload.state.session;
      return {
        ...state,
        id: id
      }
    });
});