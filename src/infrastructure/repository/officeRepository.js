import OfficeStorage from '../storage/officeStorage';
// import { validate } from '../../delivery/http/validator'

const storage = new OfficeStorage();

export const findAll = async (props) =>
//   validate('userFindAll', findAllProps) // TODO: Move validator to Controller
  storage.officeFindAll(props);

export const findById = async (props) =>
//   validate('userFindById', findByIdProps)  // TODO: Move validator to Controller
  storage.officeFindById(props);
