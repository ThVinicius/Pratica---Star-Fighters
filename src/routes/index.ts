import { Router } from 'express'
import fightersRouter from './fightersRouter'

const route = Router()

route.use(fightersRouter)

export default route
