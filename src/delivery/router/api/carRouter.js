import { body } from 'express-validator';
import * as Controller from '../../http/controller';

const carRouter = require('express').Router({ mergeParams: true });

carRouter.get('/', Controller.apiCarController.findAll);

export default carRouter;
