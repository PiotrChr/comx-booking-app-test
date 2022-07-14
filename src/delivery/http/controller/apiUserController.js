import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { findAll } from '../../../infrastructure/repository/userRepository';

export const getAll = async (req, res) => {
  const result = await findAll({});
  res.send(result);
};
