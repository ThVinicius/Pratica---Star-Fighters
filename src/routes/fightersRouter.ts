import { Router } from 'express'
import { battle } from '../controllers/fightersController.js'
import schemaValidator from '../middlewares/schemaValidator.js'
import fightersSchemas from '../schemas/fightersSchemas.js'

const route = Router()

route.post('/battle', schemaValidator(fightersSchemas.create), battle)

export default route
