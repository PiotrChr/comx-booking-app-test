import express from 'express';
import cors from 'cors';

import router from './delivery/router/router';
import { listRoutes } from './delivery/router/utils';

require('dotenv').config({ path: '.env' });

const app = express();
const port = 8000;

const allowedOrigins = [
  'http://127.0.0.1:8080',
  'http://127.0.0.1:5001',
  'http://localhost:5001',
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  }),
);

app.use(express.json());

app.use('/', router);

console.log(listRoutes(app));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
