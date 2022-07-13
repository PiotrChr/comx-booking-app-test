import { Request, Response } from 'express'
import * as officeRepository from '../../../infrastructure/repository/officeRepository'
import { validationResult } from 'express-validator'

export const findAll = async (_, res) => {
  const result = await officeRepository.findAll({})
  res.send(result)
}
