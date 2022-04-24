const defaultGroups = [
  {
    name: 'Todo',
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
];

export function groupsReducer(state = defaultGroups, action) {
  switch (action.type) {
    default:
      return state;
  }
}
