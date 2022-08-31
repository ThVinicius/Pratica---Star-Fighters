import axios from 'axios'

async function battle(firstUser: string, secondUser: string) {
  const URL = `http://api.github.com/users`

  const first = await axios.get(`${URL}/${firstUser}/repos`)

  let firstCount: number = 0
  // @ts-expect-error
  for (let i = 0; i < first.length; i++) {
    firstCount += first[i].stargazers_count
  }

  const second = await axios.get(`${URL}/${secondUser}/repos`)

  let secondCount: number = 0
  // @ts-expect-error
  for (const item of second) {
    secondCount += item.stargazers_count
  }

  let result: {}
  if (firstCount > secondCount) result = { wins: 1, losses: 0, draws: 0 }
  else if (firstCount < secondCount) result = { wins: 0, losses: 1, draws: 0 }
  else if (firstCount === secondCount) result = { wins: 0, losses: 0, draws: 1 }

  return result
}

export default { battle }
