
import * as Controller from '../http/controller'
// import authRouter from './authRouter'
import userRouter from './api/userRouter'
import carRouter from './api/carRouter'
import officeRouter from './api/officeRouter'
import bookingsRouter from './api/bookingRouter'

const apiRouter = require('express').Router({ mergeParams: true })

apiRouter.get('/', Controller.apiIndexController.apiIndex)
// apiRoutes.use('/auth', authRouter)

apiRouter.use('/user', userRouter)
apiRouter.use('/car', carRouter)
apiRouter.use('/office', officeRouter)
apiRouter.use('/bookings', bookingsRouter)

export { apiRouter }