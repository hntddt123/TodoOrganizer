import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { connectDB } from './connectDB';
import './initializeDB';
import { authenticationRoute } from './authenticate';

let port = 9000;
let app = express();

app.listen(port, console.log(`Server listening on port:${port}`));

app.get('/', (req, res) => {
  res.send('test');
});

app.use(
  cors(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('tiny')
);

authenticationRoute(app);

export const addNewTask = async (task) => {
  let db = await connectDB();
  let collection = db.collection('tasks');

  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  let { id, name, group, isComplete } = task;
  let db = await connectDB();
  let collection = db.collection('tasks');

  if (name !== undefined) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (group !== undefined) {
    await collection.updateOne({ id }, { $set: { group } });
  }
  if (isComplete !== undefined) {
    await collection.updateOne({ id }, { $set: { isComplete } });
  }
}

app.post('/task/new', async (req, res) => {
  let task = req.body.task;
  await addNewTask(task);
  res.status(200).send();
});

app.post('/task/update', async (req, res) => {
  let task = req.body.task;
  await updateTask(task);
  res.status(200).send();
});