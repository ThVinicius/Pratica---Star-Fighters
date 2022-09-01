import axios from 'axios'

async function battle(firstUser: string, secondUser: string) {
  const firstCount = await getGitHubUser(firstUser)
  const secondCount = await getGitHubUser(secondUser)

  let result: {}
  if (firstCount > secondCount) result = { wins: 1, losses: 0, draws: 0 }
  else if (firstCount < secondCount) result = { wins: 0, losses: 1, draws: 0 }
  else if (firstCount === secondCount) result = { wins: 0, losses: 0, draws: 1 }

  return result
}

async function getGitHubUser(user: string) {
  const URL = `http://api.github.com/users`

  const { data } = await axios.get(`${URL}/${user}/repos`)

  let count: number = 0
  for (const item of data) {
    count += item.stargazers_count
  }

  return count
}

export default { battle }
