import { Request, Response } from 'express'
import * as carRepository from '../../../infrastructure/repository/carRepository'
import { validationResult } from 'express-validator'

export const findAll = async (_, res) => {
  const result = await carRepository.findAll({})
  res.send(result)
}
