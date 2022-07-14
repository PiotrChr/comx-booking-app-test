import { Request, Response } from 'express';

export const index = (_, res) => {
  res.send('Index test response');
};
