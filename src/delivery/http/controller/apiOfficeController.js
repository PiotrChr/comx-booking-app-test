import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import * as officeRepository from '../../../infrastructure/repository/officeRepository';

export const findAll = async (_, res) => {
  const result = await officeRepository.findAll({});
  res.send(result);
};
