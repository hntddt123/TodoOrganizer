import { createReducer } from '@reduxjs/toolkit';
import produce from 'immer';
import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK,
  SET_TASK_COMPLETE
} from '../actions/taskActionType';
import {
  createNewTask
} from '../actions/taskActions';

const defaultTasks = [
  {
    name: 'Do tests',
    id: 'Task1',
    group: 'Group1',
    owner: 'User1',
    isComplete: false
  },
  {
    name: 'Practice React',
    id: 'Task2',
    group: 'Group1',
    owner: 'User1'
  },
  {
    name: 'Test functional components',
    id: 'Task3',
    group: 'Group2',
    owner: 'User2',
    isComplete: false
  },
  {
    name: 'Test hooks',
    id: 'Task4',
    group: 'Group2',
    owner: 'User2',
    isComplete: false
  },
  {
    name: 'Test run',
    id: 'Task5',
    group: 'Group3',
    owner: 'User2',
    isComplete: false
  }
];

export const tasksReducer = createReducer(defaultTasks, (builder) => {
  builder.addCase(createNewTask, (state, action) => {
    return [...state,
    {
      id: action.payload.taskID,
      name: 'New Task',
      group: action.payload.groupID,
      owner: action.payload.ownerID,
      isComplete: false
    }];
  });
});
