import { createReducer } from '@reduxjs/toolkit';

import { loadDBState } from '../actions/authActions';
import {
  createNewTask,
  setTaskComplete,
  setTaskGroup,
  setTaskName
} from '../actions/taskActions';

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(createNewTask, (state, action) => {
      const task = action.payload;

      state.push(task);
    })
    .addCase(setTaskComplete, (state, action) => {
      const { taskID } = action.payload;
      const task = state.find((taskState) => taskState.id === taskID);

      task.isComplete = !task.isComplete;
    })
    .addCase(setTaskGroup, (state, action) => {
      const { taskID, groupID } = action.payload;
      const task = state.find((taskState) => taskState.id === taskID);

      task.group = groupID;
    })
    .addCase(setTaskName, (state, action) => {
      const { taskID, name } = action.payload;
      const task = state.find((taskState) => taskState.id === taskID);

      task.name = name;
    })
    .addCase(loadDBState, (state, action) => {
      const { tasks } = action.payload.state;
      return tasks;
    });
});
