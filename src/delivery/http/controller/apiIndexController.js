import { Request, Response } from 'express'

export const apiIndex = (_, res) => {
  res.send('Api Index')
}
