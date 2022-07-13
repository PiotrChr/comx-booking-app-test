import mysql from 'mysql2'
import { Pool } from 'mysql'
import { ProviderError } from './Error/ProviderError'

let pool = null

export const createPool = () => {
  if (!pool) {
    try {
      pool = mysql.createPool({
        connectionLimit: 10,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      })
    } catch (error) {
      throw new ProviderError()
    }
  }

  return pool
}