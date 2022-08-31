import pg from '../database/pg.js'

function insert(username: string, wins: number, losses: number, draws: number) {
  return pg.query(
    `INSERT INTO fighters (username, wins, losses, draws) values ($1, $2, $3, $4)`,
    [username, wins, losses, draws]
  )
}

export default { insert }
