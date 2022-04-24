import {
  REQUEST_NEW_TASK,
  CREATE_NEW_TASK
} from '../actions/taskActionType';

const defaultTasks = [
  {
    name: 'Do tests',
    id: 'Task1',
    group: 'Group1',
    owner: 'User1'
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
    owner: 'User2'
  },
  {
    name: 'Test hooks',
    id: 'Task4',
    group: 'Group2',
    owner: 'User2'
  },
  {
    name: 'Test run',
    id: 'Task5',
    group: 'Group3',
    owner: 'User2'
  }
];

export function tasksReducer(state = defaultTasks, action) {
  switch (action.type) {
    case CREATE_NEW_TASK:
      return [...state,
      {
        id: action.taskID,
        name: 'New Task',
        group: action.groupID,
        owner: action.ownerID,
        isComplete: false
      }]
    default:
      return state;
  }
}
