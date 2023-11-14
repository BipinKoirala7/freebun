import axios, { AxiosResponse } from 'axios'
import { GameWholeDataT, ServerApiResponsePropsT } from './types'
import { Request , Response , NextFunction} from 'express'
import { getResponseObject } from './lib/util'

const IsUserLogedIn = async (req: Request, res: Response,next:NextFunction) => {
  console.log('Is user authenticated ->',req.isAuthenticated())
  try {
    if (!req.isAuthenticated()) next()
    else {
      res.redirect('http://localhost:5173/auth/sign-in')
      return res.send('user is not authenticated')
    }
  } catch (err) {
     return res.status(404).send(getResponseObject(404,[],false,'Something went wrong',true))
  }
  console.log('user found authenticated')
}

const checkValidGameId = async (req: Request, res: Response, next: NextFunction) => {
  console.log('user id checking ') 
  const { game_id } = req.params
  try {
    const response = await axios.get('http://localhost:3000/gameCollection?game_id=' + game_id)
    const game: Array<GameWholeDataT> = await response.data
    console.log(game)
      if (game.length > 0) {
      return next()
      }
      else {
        console.log('non valid')
      return res.status(403).send(getResponseObject(403,[],false,'The given credentials are invalid',true))
    }
  }
  catch (error) {
    console.log('error: ' + error)
    return res.status(404).send(getResponseObject(404,[],false,'Something went wrong',true))
  }
}

const checkWordCollectionPresence = async (req: Request, res: Response, next: NextFunction) => {
  console.log('word collection check')
  const { game_id } = req.params
  console.log(game_id)
  try {
    const result:AxiosResponse<ServerApiResponsePropsT<GameWholeDataT>> = await axios.get(`http://localhost:3000/wordCollection?game_id=${game_id}`)
    const data = result.data
    console.log(data)
    if (data.ok) {
      console.log('valid word collection so false')
      return res.send(403).send(getResponseObject(403,[],false,'There is already an word Collection in the database on the given credentials',true))
    }
    else next()
  }
  catch (error) {
    console.log(error)
    res.status(404).send(getResponseObject(404,[],false,'Something went wrong',true))
  }
}

export { checkValidGameId, checkWordCollectionPresence, IsUserLogedIn}