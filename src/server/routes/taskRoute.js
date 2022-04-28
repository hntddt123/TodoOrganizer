import express from 'express';
import passport from 'passport';

import { connectDB } from '../dbFunctions/connectDB';

export const taskRouter = express.Router();

export const addNewTask = async (task) => {
  const db = await connectDB();
  const collection = db.collection('tasks');

  await collection.insertOne(task);
};

export const updateTask = async (task) => {
  const { id, name, group } = task;
  const db = await connectDB();
  const collection = db.collection('tasks');

  if (name !== undefined) {
    await collection.updateOne({ id }, { $set: { name } });
  }
  if (group !== undefined) {
    await collection.updateOne({ id }, { $set: { group } });
  }
};

taskRouter.use('/',
  passport.authenticate('jwtcookie', { session: false }),
  async (req, res, next) => {
    // console.log(req.cookies.jwt);
    next();
  }
);

taskRouter.post('/new', async (req, res) => {
  const { task } = req.body;
  await addNewTask(task);
  res.status(200).send();
});

taskRouter.post('/update', async (req, res) => {
  const { task } = req.body;

  await updateTask(task);
  res.status(200).send();
});
