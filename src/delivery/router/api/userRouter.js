const userRouter = require('express').Router({ mergeParams: true })
import * as Controller from '../../http/controller'

import { check } from 'express-validator'

userRouter.get('/', Controller.apiUserController.getAll)

export default userRouter