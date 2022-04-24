import { createReducer } from '@reduxjs/toolkit';
import {
  createNewTask,
  setTaskComplete,
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
  builder
    .addCase(createNewTask, (state, action) => {
      const task = action.payload;
      
      state.push(task);
    })
    .addCase(setTaskComplete, (state, action) => {
      const id = action.payload.id;
      const task = state.find((task) => task.id === id);

      task.isComplete = !task.isComplete;
    });
});
