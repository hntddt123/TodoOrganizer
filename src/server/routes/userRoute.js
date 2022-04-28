import express from 'express';
import passport from 'passport';
import jwt from 'jsonwebtoken';

import { loadUserTaskData } from '../auth/authentication';

export const userRouter = express.Router();

const SECRET = process.env.JWT_SECRET;

const loginMiddleware = (req, res, next) => {
  passport.authenticate('login',
    (err, user) => {
      try {
        if (err || !user) {
          return next(new Error('user is not present'));
        }

        req.login(user,
          { session: false },
          (error) => {
            if (error) {
              return next(error);
            }

            const body = {
              _id: user._id,
              email: user.email
            };

            const token = jwt.sign({ user: body },
              SECRET);

            return res
              .cookie('jwt',
                token,
                {
                  httpOnly: true,
                  secure: (process.env.NODE_ENV === 'production'),
                  maxAge: 10 * 60 * 1000,
                  sameSite: true
                })
              .json({ token });
          });
      } catch (error) {
        return next(error);
      }
      return next();
    })(req, res, next);
};

userRouter.get('/',
  passport.authenticate('jwtheader', { session: false }),
  async (req, res) => {
    const taskData = await loadUserTaskData(req.user);

    res.json({
      message: 'Authenticated',
      user: req.user,
      taskData: taskData
    });
  });

userRouter.post('/signup',
  passport.authenticate('signup', { session: false }),
  async (req, res) => {
    res.json({
      message: 'Signup successful',
      user: req.user
    });
  });

userRouter.post('/login',
  loginMiddleware);

userRouter.use((err, req, res, next) => {
  console.log(err);
});
