import axios, { AxiosResponse } from 'axios'
import { ServerApiResponsePropsT } from './types'

async function checkValidUserId(userId: string): Promise<boolean | Error>{
  try {
    const response = await axios.get('http://localhost:4000/api/users/user/' + userId)
    const user:ServerApiResponsePropsT<any> = await response.data
    if (user.data.length > 0) {
      return true
    }
    else {
      return false
    }
  }
  catch (error) {
    return new Error('Something went wrong')
  }
}

async function checkValidGameId(gameId: string): Promise<Error | boolean> {
    try {
      const response = await axios.get('http://localhost:4000/api/gameCollection/game/' + gameId)
      const game: ServerApiResponsePropsT<any> = await response.data
      if (game.data.length > 0) {
      return true
      }
      else {
      return false
      }
    }
    catch (error) {
      return new Error('Something went wrong')
    }
}

async function checkWordCollectionPresence(game_id:string):Promise<Error | boolean> {
  console.log(game_id)
  // this function is necessary to check if a wordCollection object with properties exists already
  try {
    const result:AxiosResponse<ServerApiResponsePropsT<any>> = await axios.get(`http://localhost:3000/api/wordCollection?game_id=${game_id}`)
    const data = result.data
    console.log(data)
    if (data.data.length > 0) {
      return true
    }
    else return false
  }
  catch (error) {
    return new Error('Something went wrong')
  }
}

export {checkValidUserId, checkValidGameId,checkWordCollectionPresence}