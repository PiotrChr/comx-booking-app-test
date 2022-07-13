import { Request, Response } from 'express'
import { findAll } from '../../../infrastructure/repository/userRepository'
import { validationResult } from 'express-validator'

export const getAll = async (req, res) => {
  const result = await findAll({})
  res.send(result)
}


