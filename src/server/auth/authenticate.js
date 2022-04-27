import passport from 'passport';
import localStrategy from 'passport-local';
import { Strategy, ExtractJwt } from 'passport-jwt';

import { connectDB } from '../connectDB';
import { User } from '../mongooseSchema/User';

passport.use(
  'signup',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.create({ email, password })
          .catch(
            (error) => console.log(error)
          );

        return done(null, user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

passport.use(
  'login',
  new localStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try {
        const user = await User.findOne({ email }).catch(
          (error) => console.log(error)
        );
        // console.log(user)

        if (!user) {
          return done(null, false, { message: 'User not found' });
        }

        const validate = await user.isValidPassword(password);

        if (!validate) {
          return done(null, false, { message: 'Wrong Password' });
        }
        return done(null, user, { message: 'Logged in Success' });
      } catch (error) {
        return done(error);
      }
    }
  )
);

// user route
passport.use(
  new Strategy(
    {
      secretOrKey: 'SECRET_HERE',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    },
    async (token, done) => {
      try {
        return done(null, token.user);
      } catch (error) {
        return done(error);
      }
    }
  )
);

export async function loadUserTaskData(user) {
  const db = await connectDB();

  const tasks = await db.collection('tasks').find({ owner: user._id }).toArray();
  const groups = await db.collection('groups').find({ owner: user._id }).toArray();

  return (
    {
      tasks,
      groups,
      session: {
        authenticated: 'AUTHENTICATED',
        id: user._id
      }
    }
  );
}
