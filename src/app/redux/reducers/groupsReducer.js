import { createReducer } from "@reduxjs/toolkit";

import { loadDBState } from "../actions/authActions";

export const groupsReducer = createReducer([], (builder) => {
  builder.addCase(loadDBState, (state, action) => {
    const { groups } = action.payload.state;
    return groups;
  })
});
