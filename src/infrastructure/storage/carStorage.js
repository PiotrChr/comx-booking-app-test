import { AbstractMysqlStorage } from './abstractMysqlStorage'
const config = require('config')

const CAR = config.util.getEnv('DB_NAME') + '.office'

export default class CarStorage extends AbstractMysqlStorage {
  
  async carFindAll(userFindAllprops) {
    const {} = userFindAllprops
    const query = `SELECT * FROM ${CAR}`

    return this.query(query)
  }

  async carFindById(userFindByIdProps) {
    const { id } = userFindByIdProps
    const query = `SELECT * FROM ${CAR} WHERE id=?`
    const params = [id]

    return this.query(query, params)
  }
}