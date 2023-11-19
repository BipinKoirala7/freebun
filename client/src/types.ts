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
  userWordArr:Array<string>
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

type NotificationStoreT = {
  message: string,
  isError: boolean,
  isSucess: boolean,
  isNeutral:boolean
}

type WholeStoreT = {
  SelectedWords: SelectedWordsStoreT,
  wordsArr: wordArrStoreT,
  newGame: gameDataStoreT,
  userInfo: UserInfoStoreT,
  notification: NotificationStoreT
}
type UserInfoStoreT = string
// remember to remove UserStoreT type

type wordArrStoreT = ReduxStoreT<wordArrT>
// remember I might have to see for the central word

type SelectedWordsStoreT = {
  selected:string
}

type gameDataStoreT = ReduxStoreT<GameWholeDataT>

// 5)WordArray Object type 

type wordArrPropsT = {
  wordArr : Array<wordArrT>
}

type wordArrT = {
  game_id: string,
  wordArr_id: string,
  wordList:Array<string>
}

// 5-> end
// 6) Game

export type GameDataT = {
    letters: string,
    center: string,
    words: number,
    total: number,
    wordlist:Array<string>
}
  
type GameWholeDataT = {
  gameId: string,
  userId:string, 
  gameInfo: GameDataT,
  IsgameFinished: boolean
}
  

// 6 -> end
// 7-> Session for User



type SessionPassportUserT = {
  message: string,
  IsUserInSession:boolean,
  User: [{
      user_id: string,
      email: string,
      password: string,
      provider_id: string,
      username:string
  }]
}

// server api type 
type ServerApiResponsePropsT<T> = {
  message: string,
  data: Array<T> | [],
  status: number,
  ok: boolean
}
// end

// props types for other
type FetchPreviousGameArgT = {
  game_id: string,
  user_id:string
}

type UserPicT = {
  username: string,
  user_id:string
}

 export type HomeNavbarPropsT = {
  UserInfo : SessionPassportUserT
}

export type HomePlayBtnPropsT = {
  UserInfo: SessionPassportUserT
}

// type for trk query for changing email and password of the user

type RTKchangeUserPropertiesT = {
  user_id: string,
  property: string,
  changed_info:string
}

type FetchUserQueryT = {
  data: SessionPassportUserT,
  isLoading: boolean,
  isError:boolean
}

// for database compatibility
type UserT = {
  user_id: string,
  provider_id: string,
  username: string,
  photo:string,
  email: string,
  password: string,
  provider: string,
}


// upto here for database compatibility
// rtk
type NotificationPropsT = {
  type: string,
  message:string
}


export type {
  CentralHexagonProp,
  HexagonProps,
  ProgressT,
  wordT,
  ReduxStoreT,
  wordArrStoreT,
  SelectedWordsStoreT,
  gameDataStoreT,
  NotificationStoreT,
  wordArrPropsT,
  wordArrT,
  WholeStoreT,
  SessionPassportUserT,
  ServerApiResponsePropsT,
  GameWholeDataT,
  FetchPreviousGameArgT,
  UserPicT,
  RTKchangeUserPropertiesT,
  FetchUserQueryT,
  UserT,
  NotificationPropsT
}