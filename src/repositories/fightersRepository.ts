import pg from '../database/pg'

function insert(firstUser: any, secondUser: any) {
  const {
    wins1,
    losses1,
    draws1,
    name1
  }: { wins1: number; losses1: number; draws1: number; name1: string } =
    firstUser
  const {
    wins2,
    losses2,
    draws2,
    name2
  }: { wins2: number; losses2: number; draws2: number; name2: string } =
    secondUser

  return pg.query(
    `INSERT INTO fighters 
      (username, wins, losses, draws) 
      VALUES 
        ($1, $2, $3, $4), 
        ($5, $6, $7, $8)
      ON CONFLICT (username) DO 
        UPDATE SET 
          wins = fighters.wins + EXCLUDED.wins, 
          losses = fighters.losses + EXCLUDED.losses, 
          draws = fighters.draws + EXCLUDED.draws
    `,
    [name1, wins1, losses1, draws1, name2, wins2, losses2, draws2]
  )
}

function getRanking() {
  return pg.query(`
    SELECT * FROM fighters
    ORDER BY wins DESC, draws DESC
  `)
}

export default { insert, getRanking }
