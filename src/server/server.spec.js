import { addNewTask, updateTask } from "./server";

(async function dbFunctions() {
  await addNewTask(
    {
      name: 'Newly Added task',
      id: 'TestTask',
      group: 'Group1',
      owner: 'User1'
    }
  );
  await updateTask(
    {
      id: 'TestTask',
      name: 'Name Updated task'
    }
  );
})();