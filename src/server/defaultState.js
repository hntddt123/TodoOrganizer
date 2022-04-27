import md5 from 'md5';
import { NOT_AUTHENTICATED } from '../app/redux/actions/authActionType';

export const defaultState = {
  session: {
    authenticated: NOT_AUTHENTICATED
  },
  users: [
    {
      id: 'User1',
      name: 'Dev',
      passwordHash: md5('D3V')
    },
    {
      id: 'User2',
      name: 'Tasker2',
      passwordHash: md5('TASKING')
    }
  ],
  groups: [
    {
      name: 'ToDo',
      id: 'Group1',
      owner: 'User1',
    },
    {
      name: 'Doing',
      id: 'Group2',
      owner: 'User1',
    },
    {
      name: 'Done',
      id: 'Group3',
      owner: 'User1',
    }
  ],
  tasks: [
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
      owner: 'User1',
      isComplete: false
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
  ],
  comments: [
    {
      owner: 'User1',
      id: 'Comment1',
      task: 'Task1',
      content: 'Great!'
    },
    {
      owner: 'User2',
      id: 'Comment2',
      task: 'Task2',
      content: 'Nice!'
    }
  ]
}