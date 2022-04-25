import { v4 as uuid } from 'uuid';
import md5 from 'md5';
import { connectDB } from './connectDB';

const authenticationTokens = [];

async function loadUserState(user) {
  let db = await connectDB();

  let tasks = await db.collection('tasks').find({ owner: user.id }).toArray();
  let groups = await db.collection('groups').find({ owner: user.id }).toArray();

  return (
    {
      tasks,
      groups,
      session: {
        authenticated: 'AUTHENTICATED',
        id: user.id
      }
    }
  );
}

export const authenticationRoute = (app) => {
  app.post('/authenticate', async (req, res) => {
    let { username, password } = req.body;
    let db = await connectDB();

    let user = await db.collection('users').findOne({ name: username });

    if (!user) {
      return res.status(500).send("Login Error 1");
    }

    let passwordHashed = md5(password);
    let isPasswordCorrect = (passwordHashed === user.passwordHash);

    if (!isPasswordCorrect) {
      return res.status(500).send("Login Error 2");
    }

    let token = uuid();

    authenticationTokens.push(
      {
        token,
        userID: user.id
      }
    );

    let state = await loadUserState(user);

    res.send({ token, state });
  });
}