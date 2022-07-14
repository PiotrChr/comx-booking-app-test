import { body } from 'express-validator';
import * as Controller from '../../http/controller';

const officeRouter = require('express').Router({ mergeParams: true });

officeRouter.get('/', Controller.apiOfficeController.findAll);

export default officeRouter;
