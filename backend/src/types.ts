type UserT = {
    user_id: string,
    email: string | undefined,
    password: string,
    provider_id: string,
    username: string,
    photos: string,
    provider: string,
}

type SessionPassportUserT = {
  message: string,
  IsUserInSession:boolean,
  user: [{
      user_id: string,
      email: string,
      password: string,
      provider_id: string,
      username:string
  }]
}

type ServerApiResponsePropsT<T> = {
  message: string,
  data: Array<T> | [],
  status: number,
  ok: boolean
}

// game type properties
type GameDataT = {
    letters: string,
    center: string,
    words: number,
    total: number,
    wordlist:Array<string>
}

type GameApiResponseT = {
  statusCode: string,
  ok: boolean,
  result:GameDataT
}

type GameWholeDataT = {
  gameId: string,
  userId:string, 
  gameInfo: GameDataT,
  IsgameFinished: boolean
}
// game-end
// wordArr

type wordArrT = {
  game_id: string,
  wordArr_id: string,
  wordList:Array<string>
}

// end

export {
  UserT,
  SessionPassportUserT,
  ServerApiResponsePropsT,
  GameApiResponseT,
  GameDataT,
  GameWholeDataT,
  wordArrT
}
