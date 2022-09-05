import { Request, Response } from 'express'
import fightersService from '../services/fightersService'

export async function battle(req: Request, res: Response) {
  const { firstUser, secondUser }: { firstUser: string; secondUser: string } =
    req.body

  const {
    firstUser: first,
    secondUser: second,
    return: toSend
  } = await fightersService.battle(firstUser, secondUser)

  await fightersService.insertOrUpdate(first, second)

  return res.status(200).send(toSend)
}

export async function ranking(req: Request, res: Response) {
  const { rows: fighters } = await fightersService.getRanking()

  return res.status(200).send({ fighters })
}
