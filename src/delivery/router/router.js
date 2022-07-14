import express from 'express';
import * as Controller from '../http/controller';
import { apiRouter } from './apiRouter';

const router = express.Router();

router.get('/', Controller.indexController.index);

router.use('/api', apiRouter);

module.exports = router;
