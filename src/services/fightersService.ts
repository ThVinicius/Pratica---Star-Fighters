import axios from 'axios'
import fightersRepository from '../repositories/fightersRepository'

async function battle(firstUser: string, secondUser: string) {
  const firstCount = await getGitHubUser(firstUser)
  const secondCount = await getGitHubUser(secondUser)

  let result

  if (firstCount > secondCount) {
    result = {
      firstUser: { wins1: 1, losses1: 0, draws1: 0, name1: firstUser },
      secondUser: { wins2: 0, losses2: 1, draws2: 0, name2: secondUser },
      return: { winner: firstUser, loser: secondUser, draw: false }
    }
  } else if (firstCount < secondCount) {
    result = {
      firstUser: { wins1: 0, losses1: 1, draws1: 0, name1: firstUser },
      secondUser: { wins2: 1, losses2: 0, draws2: 0, name2: secondUser },
      return: { winner: secondUser, loser: firstUser, draw: false }
    }
  } else {
    result = {
      firstUser: { wins1: 0, losses1: 0, draws1: 1, name1: firstUser },
      secondUser: { wins2: 0, losses2: 0, draws2: 1, name2: secondUser },
      return: { winner: null, loser: null, draw: true }
    }
  }

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

async function insertOrUpdate(firstUser: any, secondUser: any) {
  await fightersRepository.insert(firstUser, secondUser)
}

function getRanking() {
  return fightersRepository.getRanking()
}

export default { battle, insertOrUpdate, getRanking }
