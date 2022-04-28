import { createAction } from '@reduxjs/toolkit';
import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK,
  SET_TASK_COMPLETE,
  SET_TASK_NAME,
  SET_TASK_GROUP,
  GET_TASK
} from './taskActionType';

export const requestNewTask = createAction(REQUEST_NEW_TASK, (groupID) => ({
  payload: {
    groupID: groupID
  }
}));

export const createNewTask = createAction(CREATE_NEW_TASK, (taskID, groupID, ownerID) => ({
  payload: {
    name: 'New Task',
    id: taskID,
    group: groupID,
    owner: ownerID
  }
}));

export const setTaskComplete = createAction(SET_TASK_COMPLETE, (taskID) => ({
  payload: {
    taskID: taskID
  }
}));

export const setTaskName = createAction(SET_TASK_NAME, (taskID, name) => ({
  payload: {
    taskID: taskID,
    name: name
  }
}));

export const setTaskGroup = createAction(SET_TASK_GROUP, (taskID, groupID) => ({
  payload: {
    taskID: taskID,
    groupID: groupID
  }
}));

export const getTask = createAction(GET_TASK, (task) => ({
  payload: {
    task: task
  }
}));

