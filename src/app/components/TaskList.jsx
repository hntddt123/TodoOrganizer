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
  );

  return (
    <div className='bg-slate-50 card m-3 p-3 border-2'>
      <h2 className='text-3xl m-3'>{group.name}</h2>
      {
        tasks.map((task) => ((task.group === group.id)
          ? (
            <Link to={`/task/${task.id}`} key={task.id}>
              <div className='card text-center text-2xl border-lime-400
              hover:bg-lime-300 border-2 mt-3
              transition-all duration-200 ease-in'
              >
                {task.name}
              </div>
            </Link>
          )
          : null))
      }
      <button
        className='text-xl bg-lime-300 hover:bg-lime-500 rounded-lg
        transition-all duration-200 ease-in m-3 p-3'
        type='button'
        onClick={createNewTaskHandler}
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskList;
