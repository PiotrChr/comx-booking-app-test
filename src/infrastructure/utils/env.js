require('dotenv').config();

export const getEnv = (envVar) => {
  if (typeof process.env[envVar] === 'undefined') {
    console.log(process.env);
    throw new Error(`${envVar} env variable not found in process.env`);
  }

  return process.env[envVar];
};
