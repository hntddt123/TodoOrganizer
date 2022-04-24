import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestNewTask } from '../redux/actions/taskActions';

function TaskList({ group }) {
  const tasks = useSelector((state) => state.tasksReducer);

  const dispatch = useDispatch();

  const createNewTaskHandler = useCallback(
    () => dispatch(requestNewTask(group.id)),
    [dispatch]
  )

  return (
    <div>
      <h2>{group.name}</h2>
      {
        tasks.map((task) => {
          return (task.group === group.id) ? <div key={task.id}>{task.id}{task.name}</div> : '';
        })
      }
      <button onClick={() => {
        createNewTaskHandler();
      }}>
        Add new task
      </button>
    </div>
  );
}

export default TaskList;
