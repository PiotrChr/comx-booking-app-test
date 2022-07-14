import { check, body } from 'express-validator';
import * as Controller from '../../http/controller';

const bookingsRouter = require('express').Router({ mergeParams: true });

bookingsRouter.get('/', Controller.apiBookingsController.findAll);

// bookingsRouter.get('/:user_id', Controller.apiBookingsController.findAllByUser)

bookingsRouter.get('/:entity_type/:entity_id', Controller.apiBookingsController.findAllByEntity);

bookingsRouter.post(
  '/',
  [
    body('entity_type').isNumeric(),
    body('entity_name').isURL(),
    body('booked_from').isNumeric(),
    body('booked_until').isString(),
  ],
  Controller.apiBookingsController.createNewBooking,
);

export default bookingsRouter;
