import { AbstractMysqlStorage } from './abstractMysqlStorage';
import { getEnv } from '../utils/env';

const CAR = `${getEnv('DB_NAME')}.car`;

export default class CarStorage extends AbstractMysqlStorage {
  async carFindAll(userFindAllprops) {
    const {} = userFindAllprops;
    const query = `SELECT * FROM ${CAR}`;

    return this.query(query);
  }

  async carFindById(userFindByIdProps) {
    const { id } = userFindByIdProps;
    const query = `SELECT * FROM ${CAR} WHERE id=?`;
    const params = [id];

    return this.query(query, params);
  }
}
