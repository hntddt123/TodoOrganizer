import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import mongoose from 'mongoose';
import 'dotenv/config';

import './dbFunctions/initializeDB';
import { taskRouter } from './routes/taskRoute';
import { userRouter } from './routes/userRoute';

mongoose.connect('mongodb://127.0.0.1:27017/taskorganizer');
mongoose.connection.on('error', (error) => console.log(error));

const port = process.env.PORT || 9000;
const app = express();

app.listen(port, console.log(`Server listening on port:${port}`));

morgan.token('authenticate', (req) => req.body);

app.use(
  cors({ origin: true, credentials: true,
  }),
  cookieParser(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  morgan('dev')
);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.resolve(__dirname, '../../dist')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve('index.html'));
  });
}

// Sub Routes
app.use('/task', taskRouter);

app.use('/user', userRouter);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ error: err });
});
