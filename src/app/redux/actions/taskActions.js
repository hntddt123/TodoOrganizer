import { createAction } from "@reduxjs/toolkit";
import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK,
  SET_TASK_COMPLETE,
  SET_TASK_NAME,
  SET_TASK_GROUP
} from "./taskActionType";

export const requestNewTask = createAction(REQUEST_NEW_TASK, (groupID) => {
  return {
    payload: {
      groupID: groupID
    }
  }
});

export const createNewTask = createAction(CREATE_NEW_TASK, (taskID, groupID, ownerID) => {
  return {
    payload: {
      name: 'New Task',
      id: taskID,
      group: groupID,
      owner: ownerID,
      isComplete: false
    }
  }
});

export const setTaskComplete = createAction(SET_TASK_COMPLETE, (taskID, isComplete) => {
  return {
    payload: {
      id: taskID,
      isComplete: isComplete
    }
  }
});

export const setTaskName = createAction(SET_TASK_NAME, (taskID, name) => {
  return {
    payload: {
      id: taskID,
      name: name
    }
  }
});

export const setTaskGroup = createAction(SET_TASK_GROUP, (taskID, groupID) => {
  return {
    payload: {
      id: taskID,
      group: groupID
    }
  }
});