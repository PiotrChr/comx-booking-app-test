import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as carRepository from '../../../infrastructure/repository/carRepository';

export const findAll = async (_, res) => {
  const result = await carRepository.findAll({});
  res.send(result);
};
