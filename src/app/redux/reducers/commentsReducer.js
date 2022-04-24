const defaultComments = [
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
];

export function commentsReducer(state = defaultComments, action) {
  switch (action.type) {
    default:
      return state;
  }
}
