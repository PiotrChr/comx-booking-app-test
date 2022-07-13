const bookingsRouter = require('express').Router({ mergeParams: true })
import * as Controller from '../../http/controller'
import { check } from 'express-validator'


bookingsRouter.get('/', Controller.apiBookingsController.findAll)

// bookingsRouter.get('/:user_id', Controller.apiBookingsController.findAllByUser)

bookingsRouter.get('/:entity_type/:entity_id', Controller.apiBookingsController.findAllByEntity)

bookingsRouter.post(
  '/',
  [
    check('entity_type').isNumeric(),
    check('entity_name').isURL(),
    check('booked_from').isNumeric(),
    check('booked_until').isString()
  ],
  Controller.apiBookingsController.createNewBooking
)

export default bookingsRouter
