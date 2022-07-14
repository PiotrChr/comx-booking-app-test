import CarStorage from '../storage/carStorage';
// import { validate } from '../../delivery/http/validator'

const storage = new CarStorage();

export const findAll = async (props) =>
//   validate('userFindAll', findAllProps) // TODO: Move validator to Controller
  storage.carFindAll(props);

export const findById = async (props) =>
//   validate('userFindById', findByIdProps)  // TODO: Move validator to Controller
  storage.carFindById(props);
