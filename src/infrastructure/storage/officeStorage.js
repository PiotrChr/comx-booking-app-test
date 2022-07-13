import { AbstractMysqlStorage } from './abstractMysqlStorage'
const config = require('config')

const OFFICE = config.util.getEnv('DB_NAME') + '.office'

export default class OfficeStorage extends AbstractMysqlStorage {
  
  async officeFindAll(userFindAllprops) {
    const {} = userFindAllprops
    const query = `SELECT * FROM ${OFFICE}`

    return this.query(query)
  }

  async officeFindById(userFindByIdProps) {
    const { id } = userFindByIdProps
    const query = `SELECT * FROM ${OFFICE} WHERE id=?`
    const params = [id]

    return this.query(query, params)
  }
}