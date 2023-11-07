// 1)Hexagon Props

type CentralHexagonProp = {
    word:string
}

type HexagonProps = {
    place: string,
    word:string
}

// 1:end

// 2 Progress object type

type ProgressT = {
    height: string,
    progress: string,
}

// 2 -> end
// 3) Words Object type

type wordT = {
  word: string,
}

// 3-> end
// 4) redux common type store and store

type ReduxStoreT<T> = {
  data: Array<T>,
  isLoading: boolean,
  isError:null
}

type WholeStoreT = {
  SelectedWords: SelectedWordsStoreT,
  wordsArr: wordArrStoreT,
  newGame: gameDataStoreT
}

type wordArrStoreT = ReduxStoreT<wordT>

type SelectedWordsStoreT = {
  selected:string
}

type gameDataStoreT = ReduxStoreT<GameData>

// 5)WordArray Object type 

type wordArrPropsT = {
  wordArr : Array<string>
}

type wordArrT = {
  game_id: string,
  wordArr_id: string,
  wordArr:Array<wordT>
}

// 5-> end
// 6) Game

type GameWholeDataT = {
    letters: string,
    center: string,
    words: number,
    total: number,
    wordlist:Array<string>
}

type GameApiResponseT = {
  statusCode: string,
  ok: boolean,
  result:GameWholeDataT
}

type GameData = {
  gameId: string,
  // userId:string,  needed for specifying user
  gameInfo:GameWholeDataT
}

// 6 -> end
// 7-> Session for User

type SessionPassportUserT = {
  User: {
      passport: {
        user: [{
            user_id: string,
            email: string,
            password: string,
            provider_id: string,
            username:string
        }]
    }
   }
}

// 
// for database compatibility
type UserT = {
  user_id: string,
  email: string,
  password: string,
  provider: string,
  last_log_in: Date,
  last_log_out:Date
}

type GameT = {
  user_id: string,
  game_id: string,
  game_status: string,
  game_data: {
    central_word: string,
    words: string,
    wordlists:Array<string>
  }
}

// upto here for database compatibility

export type {
  CentralHexagonProp,
  HexagonProps,
  ProgressT,
  wordT,
  ReduxStoreT,
  wordArrStoreT,
  SelectedWordsStoreT,
  gameDataStoreT,
  wordArrPropsT,
  wordArrT,
  WholeStoreT,
  SessionPassportUserT,
  GameWholeDataT,
  GameApiResponseT,
  GameData,
  UserT,
  GameT,
}