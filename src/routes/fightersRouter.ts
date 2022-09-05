import { Router } from 'express'
import { battle, ranking } from '../controllers/fightersController'
import schemaValidator from '../middlewares/schemaValidator'
import fightersSchemas from '../schemas/fightersSchemas'

const route = Router()

route.post('/battle', schemaValidator(fightersSchemas.create), battle)

route.get('/ranking', ranking)

export default route
