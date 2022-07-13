import mysql from 'mysql2'
import { Pool } from 'mysql'
import { ProviderError } from './Error/ProviderError'
import { getEnv } from '../utils/env'


let pool = null

console.log(getEnv('DB_HOST'))

export const createPool = () => {
  if (!pool) {
    try {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: getEnv('DB_HOST'),
        user: getEnv('DB_USER'),
        password: getEnv('DB_PASS'),
        database: getEnv('DB_NAME')
      })
    } catch (error) {
      throw new ProviderError()
    }
  }

  return pool
}