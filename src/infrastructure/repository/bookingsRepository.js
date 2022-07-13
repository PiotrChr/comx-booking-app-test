import BookingsStorage from '../storage/bookingsStorage'

const storage = new BookingsStorage()

export const findAll = async (props) => {
  return storage.bookingFindAll(props)
}

export const findById = async (props) => {
  return storage.bookingFindById(props)
}

export const findByUser = async (props) => {
  return storage.bookingFindByUser(props)
}

export const findByEntity = async (props) => {
  return storage.bookingFindByEntity(props)
}

export const createNewBooking = async (props) => {
  return storage.createNewBooking(props)
}

