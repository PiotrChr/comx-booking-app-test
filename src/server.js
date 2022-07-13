require('dotenv').config()

import express from 'express'
import cors from 'cors'

import router from './delivery/router/router'
import { listRoutes } from './delivery/router/utils'

const app = express();
const port = 8000

const allowedOrigins = [
  'http://localhost:8080',
]

app.use(
  cors({
    origin: function(origin, callback) {
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          'The CORS policy for this site does not ' + 'allow access from the specified Origin.'
        return callback(new Error(msg), false)
      }
      return callback(null, true)
    },
  })
)

app.use(express.json())

app.use('/', router)

console.log(listRoutes(app))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))