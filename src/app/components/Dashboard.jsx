import React from 'react';
import { useSelector } from 'react-redux';
import TaskList from './TaskList';

function Dashboard() {
  const groups = useSelector((state) => state.groupsReducer);
  console.log(groups)

  return (
    <div className='card bg-lime-200'>
      <h1 className='text-4xl'>
        看板
      </h1>
      <h2>
        {groups.map((group) => <TaskList key={group.id} group={group} />)}
      </h2>
    </div>
  );
}

export default Dashboard;
