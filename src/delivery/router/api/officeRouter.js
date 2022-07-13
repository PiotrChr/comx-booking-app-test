import * as Controller from '../../http/controller'
import { body } from 'express-validator'

const officeRouter = require('express').Router({ mergeParams: true })

officeRouter.get('/', Controller.apiOfficeController.findAll)

export default officeRouter