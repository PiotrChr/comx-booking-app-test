import { AbstractMysqlStorage } from './abstractMysqlStorage';
import { getEnv } from '../utils/env';

const USERS = `${getEnv('DB_NAME')}.user`;

export default class UserStorage extends AbstractMysqlStorage {
  constructor() {
    super();
  }

  async addUser(addUserProps) {
    const { id, username } = addUserProps;
    const query = `
      INSERT INTO ${USERS}
        (id, username)
      VALUES
        (?,?)`;
    const params = [username];

    return this.query(query, params);
  }

  async userFindAll(userFindAllprops) {
    const {} = userFindAllprops;
    const query = `SELECT * FROM ${USERS}`;

    return this.query(query);
  }

  async userFindById(userFindByIdProps) {
    const { id } = userFindByIdProps;
    const query = `SELECT * FROM ${USERS} WHERE id=?`;
    const params = [id];

    return this.query(query, params);
  }

  async userFindByName(userFindByName) {
    const { username } = userFindByName;
    const query = `SELECT * FROM ${USERS} WHERE username=?`;
    const params = [username];

    return this.query(query, params);
  }
}
