import React from 'react';
import { useSelector } from 'react-redux';

function TaskList({ group }) {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      <h2>{group.name}</h2>
      {
        tasks.map((task) => {
          return (task.group === group.id) ? <div>{task.name}</div> : '';
        })
      }
    </div>
  );
}

export default TaskList;