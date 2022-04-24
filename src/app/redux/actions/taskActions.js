import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK
} from "./taskActionType";

export const requestNewTask = (groupID) => ({
  type: REQUEST_NEW_TASK,
  groupID: groupID
});

export const createNewTask = (taskID, groupID, ownerID) => ({
  type: CREATE_NEW_TASK,
  taskID: taskID,
  groupID: groupID,
  ownerID: ownerID
});
