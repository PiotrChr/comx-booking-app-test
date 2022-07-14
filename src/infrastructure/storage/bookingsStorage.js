import { AbstractMysqlStorage } from './abstractMysqlStorage';
import { getEnv } from '../utils/env';

const BOOKINGS = `${getEnv('DB_NAME')}.bookings`;

export default class CarStorage extends AbstractMysqlStorage {
  async bookingFindAll(userFindAllprops) {
    const {} = userFindAllprops;
    const query = `SELECT * FROM ${BOOKINGS}`;

    return this.query(query);
  }

  async bookingFindById(props) {
    const { id } = props;
    const query = `SELECT * FROM ${BOOKINGS} WHERE id=?`;
    const params = [id];

    return this.query(query, params);
  }

  async bookingFindByUser({ user_id }) {
    const query = `SELECT * FROM ${BOOKINGS} WHERE user_id=?`;
    const params = [user_id];

    return this.query(query, params);
  }

  async bookingFindByEntity({ entity_type, entity_id }) {
    const query = `SELECT * FROM ${BOOKINGS} WHERE entity_type=? AND entity_id=?`;
    const params = [entity_type, entity_id];

    return this.query(query, params);
  }

  async createNewBooking({
    user_id, entity_type, entity_id, booked_from, booked_until,
  }) {
    const now = (new Date())
      .toISOString()
      .slice(0, 19)
      .replace('T', ' ');
    const query = `
        INSERT INTO ${BOOKINGS}
            (user_id, entity_type, entity_id, booked_from, booked_until, date_created)
            VALUES (?,?,?,?,?,?)`;
    const params = [user_id, entity_type, entity_id, booked_from, booked_until, now];

    return this.query(query, params);
  }
}
