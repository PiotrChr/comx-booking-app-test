import { createPool } from '../db/rdsDbProvider';
import { StorageError } from './Error/StorageError';

export class AbstractMysqlStorage {
  pool;

  constructor() {
    try {
      this.pool = createPool();
    } catch (error) {
      throw new StorageError(error.message);
    }
  }

  async transaction(queries) {
    const connection = await this.pool.promise().getConnection();
    await connection.beginTransaction();

    try {
      for (let i = 0; i < queries.length; i++) {
        await connection.execute(queries[i].query, queries[i].params);
      }

      await connection.commit();
      connection.release();
    } catch (error) {
      // TODO: Replace console.logs with a proper logging system
      console.log(error);
      await connection.rollback((err) => {
        console.log(err);
      });
      connection.release();
      throw error;
    }
  }

  async query(query, params) {
    try {
      const result = await this.pool.promise().execute(query, params);
      return result[0];
    } catch (error) {
      console.log(query, error);
      throw error;
    }
  }
}
