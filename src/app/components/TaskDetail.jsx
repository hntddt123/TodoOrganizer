import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { setTaskComplete, setTaskName } from '../redux/actions/taskActions';

function TaskDetail() {
  const tasks = useSelector((state) => state.tasksReducer);
  const groups = useSelector((state) => state.groupsReducer);
  const comments = useSelector((state) => state.commentsReducer);

  const props = useParams();
  const task = tasks.find((task) => task.id === props.id);

  const dispatch = useDispatch();

  const setTaskCompleteHandler = useCallback(() => {
    dispatch(setTaskComplete(task.id, !task.isComplete))
  }, [dispatch]);

  const setTaskNameHandler = useCallback((text) => {
    dispatch(setTaskName(task.name, text))
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
        <button onClick={setTaskCompleteHandler}>
          {task.isComplete ? 'Undo' : 'Complete'}
        </button>
      </div>
      <div>
        <select>
          {groups.map((group) =>
            <option key={group.id} value={group.id}>{group.name}</option>
          )}
        </select>
      </div>
      <div>
        <Link to='/dashboard'>
          <button>
            Back to Dashbord
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TaskDetail;