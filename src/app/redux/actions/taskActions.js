import { createAction } from "@reduxjs/toolkit";
import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK,
  SET_TASK_COMPLETE,
  SET_TASK_NAME,
  SET_TASK_GROUP
} from "./taskActionType";

export const requestNewTask = (groupID) => ({
  type: REQUEST_NEW_TASK,
  groupID: groupID
});

export const createNewTask = createAction(CREATE_NEW_TASK, (taskID, groupID, ownerID) => {
  return {
    payload: {
      taskID: taskID,
      groupID: groupID,
      ownerID: ownerID
    }
  }
});

export const setTaskComplete = (taskID, isComplete) => ({
  type: SET_TASK_COMPLETE,
  taskID: taskID,
  isComplete: isComplete
});

export const setTaskName = (taskID, name) => ({
  type: SET_TASK_NAME,
  taskID: taskID,
  name: name
});

export const setTaskGroup = (taskID, groupID) => ({
  type: SET_TASK_GROUP,
  taskID: taskID,
  groupID: groupID
});