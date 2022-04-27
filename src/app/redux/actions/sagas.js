import { take, put, select } from 'redux-saga/effects';
import { v4 as uuid } from 'uuid';
import axios from 'axios';

import * as taskActionType from './taskActionType';
import * as taskActions from './taskActions';
import * as authActionType from './authActionType';
import * as authActions from './authActions';

const url = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:9000';

export function* taskCreationSaga() {
  while (true) {
    const { payload } = yield take(taskActionType.REQUEST_NEW_TASK);
    const taskID = uuid();
    const ownerID = '6269a540ac0c5f841d4dc6cc';

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
    });

    console.info(`Response: ${payload.task.isComplete}`);
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { payload } = yield take(authActionType.REQUEST_AUTHENTICATE_USER);
    const { email, password } = payload;

    try {
      const { data } = yield axios.post(`${url}/user/login`, {
        email: email,
        password: password
      });

      // console.log(data);

      if (!data) {
        throw new Error();
      }

      const userReponse = yield axios.get(`${url}/user`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
          'Content-Type': 'application/json'
        }
      });
      console.log(userReponse.data);

      if (!userReponse) {
        throw new Error();
      }

      yield put(authActions.loadDBState(userReponse.data));
      yield put(authActions.processAuthenticateUser(authActionType.AUTHENTICATED));
      // console.log(`Authenticated: \n${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      console.log(`Authentication Error: \n${error}`);
      yield put(authActions.processAuthenticateUser(authActionType.NOT_AUTHENTICATED));
    }
  }
}
