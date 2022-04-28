import { createReducer } from '@reduxjs/toolkit';

import { loadDBState } from '../actions/authActions';
import {
  createNewTask,
  setTaskGroup,
  setTaskName
} from '../actions/taskActions';

export const tasksReducer = createReducer([], (builder) => {
  builder
    .addCase(createNewTask, (state, action) => {
      const task = action.payload;

      state.push(task);
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
      const { tasks } = action.payload.state.taskData;
      return tasks;
    });
});
