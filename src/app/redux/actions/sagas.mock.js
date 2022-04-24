import { take, put, select } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';

import * as taskActionType from './taskActionType';
import * as taskActions from './taskActions';

export function* taskCreationSaga() {
  while (true) {
    const { groupID } = yield take(taskActionType.REQUEST_NEW_TASK);
    const taskID = uuid();
    const ownerID = `User1`;

    yield put(taskActions.createNewTask(taskID, groupID, ownerID));

    console.log(`GroupID from taskCreationSaga is ${groupID}`);
  }
}
