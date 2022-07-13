require('dotenv').config()

export const getEnv = (envVar) => {
  if ('undefined' === typeof process.env[envVar]) {
    console.log(process.env)
    throw new Error(`${envVar} env variable not found in process.env`)
  }

  return process.env[envVar]
}