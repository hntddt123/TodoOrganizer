import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { loadUserTaskData } from '../auth/authenticate';

export const userRouter = express.Router();

const loginMiddleware = async (req, res, next) => {
  passport.authenticate(
    'login',
    async (err, user) => {
      try {
        if (err || !user) {
          return next(new Error('user is not present'));
        }

        req.login(
          user,
          { session: false },
          async (error) => {
            if (error) {
              return next(error);
            }

            const body = {
              _id: user._id,
              email: user.email
            };

            const token = jwt.sign(
              { user: body },
              'SECRET_HERE'
            );

            return res.json({ token });
          }
        );
      } catch (error) {
        return next(error);
      }
    }
  )(req, res, next);
};

userRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const taskData = await loadUserTaskData(req.user);

    res.json({
      message: 'Authenticated',
      user: req.user,
      taskData: taskData
    });
  }
);

userRouter.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  }
);

userRouter.post(
  '/login',
  loginMiddleware
);

userRouter.use((err, req, res, next) => {
  console.log(err);
});
