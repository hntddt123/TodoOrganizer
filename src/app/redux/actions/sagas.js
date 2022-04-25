import { take, put, select } from "redux-saga/effects";
import { v4 as uuid } from 'uuid';
import axios from "axios";

import * as taskActionType from './taskActionType';
import * as taskActions from './taskActions';

const url = 'http://localhost:9000';

export function* taskCreationSaga() {
  while (true) {
    const { payload } = yield take(taskActionType.REQUEST_NEW_TASK);
    const taskID = uuid();
    const ownerID = 'User1';

    yield put(taskActions.createNewTask(taskID, payload.groupID, ownerID));

    const { res } = yield axios.post(`${url}/task/new`, {
      task: {
        id: taskID,
        group: payload.groupID,
        name: 'New Task',
        owner: ownerID,
        isComplete: false
      }
    });

    console.info(`Response: ${res}`);
  }
}

export function* taskModificationSaga() {
  while (true) {
    const { payload } = yield take([
      taskActionType.GET_TASK
    ]);


    axios.post(`${url}/task/update`, {
      task: {
        id: payload.task.id,
        name: payload.task.name,
        group: payload.task.group,
        isComplete: payload.task.isComplete
      }
    })

    console.info(`Response: ${payload.task.isComplete}`);
  }
}