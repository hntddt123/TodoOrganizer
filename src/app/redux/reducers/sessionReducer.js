import { createReducer } from '@reduxjs/toolkit';
import {
  requestAuthenticateUser,
  processAuthenticateUser,
  loadDBState
} from '../actions/authActions';
import {
  AUTHENTICATING
} from '../actions/authActionType';

export const sessionReducer = createReducer({}, (builder) => {
  builder
    .addCase(requestAuthenticateUser, (state, action) => ({
      ...state,
      authenticated: AUTHENTICATING
    }))
    .addCase(processAuthenticateUser, (state, action) => {
      state.authenticated = action.payload.authenticated;
    })
    .addCase(loadDBState, (state, action) => {
      console.log(action.payload.state);
      const { id } = action.payload.state.taskData.session;
      return {
        ...state,
        id: id
      };
    });
});
