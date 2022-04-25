import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { useDidMount } from './hooks/useDidMountHook';
import { setTaskComplete, setTaskName, setTaskGroup, getTask } from '../redux/actions/taskActions';

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

  const setTaskCompleteHandler = useCallback(() => {
    const task = tasks.find((task) => task.id === props.id);
    dispatch(setTaskComplete(task.id));
  }, [dispatch]);

  const setTaskGroupHandler = useCallback((e) => {
    dispatch(setTaskGroup(task.id, e.target.value));
  }, [dispatch]);

  return (
    <div>
      <div>
        <input
          onChange={setTaskNameHandler}
          value={task.name}
        />
      </div>
      <div>
        <button type='button' onClick={setTaskCompleteHandler}>
          {task.isComplete ? 'Undo' : 'Complete'}
        </button>
      </div>
      <div>
        <select onChange={setTaskGroupHandler} value={task.group}>
          {groups.map((group) => (
            <option
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
          <button type='button'>
            Back to Dashbord
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDetail;
