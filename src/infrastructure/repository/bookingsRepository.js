import BookingsStorage from '../storage/bookingsStorage'
// import { validate } from '../../delivery/http/validator'

const storage = new BookingsStorage()

export const findAll = async (props) => {
//   validate('userFindAll', findAllProps) // TODO: Move validator to Controller
  return storage.bookingFindAll(props)
}

export const findById = async (props) => {
//   validate('userFindById', findByIdProps)  // TODO: Move validator to Controller
  return storage.bookingFindById(props)
}

export const findByUser = async (props) => {
//   validate('userFindByName', findByNameProps)  // TODO: Move validator to Controller
  return storage.bookingFindByUser(props)
}

export const createNewBooking = async (props) => {
//   validate('userFindByName', findByNameProps)  // TODO: Move validator to Controller
  return storage.createNewBooking(props)
}

