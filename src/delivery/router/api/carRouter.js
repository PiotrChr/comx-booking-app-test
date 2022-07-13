import * as Controller from '../../http/controller'
import { body } from 'express-validator'

const carRouter = require('express').Router({ mergeParams: true })

carRouter.get('/', Controller.apiCarController.findAll)

export default carRouter