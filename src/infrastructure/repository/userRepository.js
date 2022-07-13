import UserStorage from '../storage/userStorage'
// import { validate } from '../../delivery/http/validator'

const storage = new UserStorage()

export const findAll = async (props) => {
//   validate('userFindAll', findAllProps) // TODO: Move validator to Controller
  return storage.userFindAll(props)
}

export const findById = async (props) => {
//   validate('userFindById', findByIdProps)  // TODO: Move validator to Controller
  return storage.userFindById(props)
}

export const findByName = async (props) => {
//   validate('userFindByName', findByNameProps)  // TODO: Move validator to Controller
  return storage.userFindByName(props)
}

export const addUser = async (props) => {
//   validate('addUser', addUserProps)  // TODO: Move validator to Controller
  return storage.addUser(props)
}