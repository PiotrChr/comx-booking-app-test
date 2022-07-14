import { AbstractMysqlStorage } from './abstractMysqlStorage';
import { getEnv } from '../utils/env';

const OFFICE = `${getEnv('DB_NAME')}.office`;

export default class OfficeStorage extends AbstractMysqlStorage {
  async officeFindAll(userFindAllprops) {
    const {} = userFindAllprops;
    const query = `SELECT * FROM ${OFFICE}`;

    return this.query(query);
  }

  async officeFindById(userFindByIdProps) {
    const { id } = userFindByIdProps;
    const query = `SELECT * FROM ${OFFICE} WHERE id=?`;
    const params = [id];

    return this.query(query, params);
  }
}
