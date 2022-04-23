import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

function Dashboard() {
  const groups = useSelector((state) => state.groups);

  return (
    <div>
      <h1>
        TODO看板
      </h1>
      <h2>
        {groups.map((group) => <TaskList key={group.id} group={group} />)}
      </h2>
    </div>
  );
}

export default Dashboard;