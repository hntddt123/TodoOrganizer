import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { useDidMount } from './hooks/useDidMountHook';
import { setTaskName, setTaskGroup, getTask } from '../redux/actions/taskActions';

function TaskDetail() {
  const tasks = useSelector((state) => state.tasksReducer);
  const groups = useSelector((state) => state.groupsReducer);
  const comments = useSelector((state) => state.commentsReducer);

  const didMountRef = useDidMount();

  const props = useParams();
  const task = tasks.find((task) => task.id === props.id);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!didMountRef) {
      dispatch(getTask(task));
    }
  }, [task]);

  const setTaskNameHandler = useCallback((e) => {
    dispatch(setTaskName(task.id, e.target.value));
  }, [dispatch]);

  const setTaskGroupHandler = useCallback((e) => {
    dispatch(setTaskGroup(task.id, e.target.value));
  }, [dispatch]);

  return (
    <div className='bg-lime-200 card border-2 m-3'>
      <div>
        <div className='text-4xl'>
          Task Name
        </div>
        <input
          className='shadow-sm rounded-lg m-3 p-3 border-2'
          onChange={setTaskNameHandler}
          value={task.name}
        />
        <select
          className='card-small text-xl border-lime-400 hover:bg-lime-300 bg-white
          ease-in border-2 mt-3'
          onChange={setTaskGroupHandler}
          value={task.group}
        >
          {groups.map((group) => (
            <option
              className='bg-white'
              key={group.id}
              value={group.id}
            >
              {group.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Link to='/dashboard'>
          <button
            className='card-small text-lg bg-lime-300 hover:bg-lime-500
            transition-all duration-200 ease-in mt-3'
            type='button'
          >
            Back to Dashbord
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDetail;
