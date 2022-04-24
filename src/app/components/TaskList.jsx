import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

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
          return ((task.group === group.id)
            ?
            <Link to={`/task/${task.id}`} key={task.id}>
              <div>{task.name}</div>
            </Link>
            : null);
        })
      }
      <button onClick={createNewTaskHandler}>
        Add new task
      </button>
    </div >
  );
}

export default TaskList;
