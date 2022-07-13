import { Request, Response } from 'express'
import * as bookingsRepository from '../../../infrastructure/repository/bookingsRepository'
import { validationResult } from 'express-validator'

export const findAll = async (_, res) => {
  const result = await bookingsRepository.findAll({})
  res.send(result)
}

export const findAllByUser = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }

  const user_id = req.params.user_id

  try {
    const result = await bookingsRepository.findByUser({user_id})

    res.send(result)
  } catch (error) {
    res.send(error.message)
  }
}

export const createNewBooking = async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() })
    }

    // TODO: Create booking
    // TODO: Get props

    try {
        const result = await bookingsRepository.createNewBooking(props)

        res.send(result)
    } catch (error) {
        res.send(error.message)
    }

}
