export const defaultState = {
  // users: [
  //   {
  //     id: '626994bce3898f7a7574b4a6',
  //     name: 'Dev',
  //     password: md5('D3V')
  //   },
  //   {
  //     id: 'User2',
  //     name: 'Tasker2',
  //     password: md5('TASKING')
  //   }
  // ],
  groups: [
    {
      name: 'ToDo',
      id: 'Group1',
      owner: '626994bce3898f7a7574b4a6',
    },
    {
      name: 'Doing',
      id: 'Group2',
      owner: '626994bce3898f7a7574b4a6',
    },
    {
      name: 'Done',
      id: 'Group3',
      owner: '626994bce3898f7a7574b4a6',
    }
  ],
  tasks: [
    {
      name: 'Do tests',
      id: 'Task1',
      group: 'Group1',
      owner: '626994bce3898f7a7574b4a6'
    },
    {
      name: 'Practice React',
      id: 'Task2',
      group: 'Group1',
      owner: '626994bce3898f7a7574b4a6'
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
      owner: '626994bce3898f7a7574b4a6',
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
