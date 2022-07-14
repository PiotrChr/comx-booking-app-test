import { Request, Response } from 'express'
import * as bookingsRepository from '../../../infrastructure/repository/bookingsRepository'
import { validationResult } from 'express-validator'

export const findAll = async (req, res) => {
  const { user_id } = req.param

  let result;

  if (user_id) {
    result = await bookingsRepository.findByUser({user_id})
  } else {
    result = await bookingsRepository.findAll({})
  }

  res.send(result)
}

export const findAllByEntity = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const entity_type = req.params.entity_type
  const entity_id = req.params.entity_id

  try {
    const result = await bookingsRepository.findByEntity({entity_type, entity_id})

    res.send(result)
  } catch (error) {
    res.send(error.message)
  }
}

export const createNewBooking = async (req, res) => {
  const props = req.body // Not a good idea
  
  try {
        const result = await bookingsRepository.createNewBooking(props)

        res.send(result)
    } catch (error) {
        res.send(error.message)
    }

}
