export const defaultState = {
  users: [
    {
      id: 'User1',
      name: 'Dev'
    },
    {
      id: 'User2',
      name: 'U2'
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