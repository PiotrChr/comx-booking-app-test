import { check } from 'express-validator';
import * as Controller from '../../http/controller';

const userRouter = require('express').Router({ mergeParams: true });

userRouter.get('/', Controller.apiUserController.getAll);

export default userRouter;
