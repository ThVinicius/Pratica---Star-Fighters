import { Router } from 'express'
import fightersRouter from './fightersRouter.js'

const route = Router()

route.use(fightersRouter)

export default route
