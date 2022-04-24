const defaultUsers = [
  {
    id: 'User1',
    name: 'Dev'
  },
  {
    id: 'User2',
    name: 'U2'
  }
];

export function usersReducer(state = defaultUsers, action) {
  switch (action.type) {
    default:
      return state;
  }
}
