import { AbstractMysqlStorage } from './abstractMysqlStorage'
const config = require('config')

const BOOKINGS = config.util.getEnv('DB_NAME') + '.bookings'

export default class CarStorage extends AbstractMysqlStorage {
  
  async bookingFindAll(userFindAllprops) {
    const {} = userFindAllprops
    const query = `SELECT * FROM ${BOOKINGS}`

    return this.query(query)
  }

  async bookingFindById(userFindByIdProps) {
    const { id } = userFindByIdProps
    const query = `SELECT * FROM ${BOOKINGS} WHERE id=?`
    const params = [id]

    return this.query(query, params)
  }

  async bookingFindByUser(userFindByIdProps) {
    const { user_id } = userFindByIdProps
    const query = `SELECT * FROM ${BOOKINGS} WHERE user_id=?`
    const params = [user_id]

    return this.query(query, params)
  }

  async createNewBooking(userFindByIdProps) {
    const { user_id, entity_type, entity_id, booked_from, booked_until } = userFindByIdProps
    const now = (new Date())
        .toISOString()
        .slice(0, 19)
        .replace('T', ' ')
    const query = `
        INSERT INTO ${BOOKINGS}
            (user_id, entity_type, entity_id, booked_from, booked_until, date_created)
            VALUES (?,?,?,?,?,?)`
    const params = [user_id, entity_type, entity_id, booked_from, booked_until, now]

    return this.query(query, params)
  }
}