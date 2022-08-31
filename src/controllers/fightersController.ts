import { Request, Response } from 'express'
import fightersService from '../services/fightersService.js'

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body

  const teste = await fightersService.battle(firstUser, secondUser)

  console.log(teste)

  return res.sendStatus(200)
}
