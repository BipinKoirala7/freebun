type CentralHexagonProp = {
    word:string
}

type HexagonProps = {
    place: string,
    word:string
}

type ProgressT = {
    height: string,
    progress: string,
}

type FreebeeStoreT = {
  freebee: string,
}

type SelectedWordsT = {
  selected:string
}

type WordsArrT = {
    isLoading: boolean,
    isError: null | string,
    data: Array<string>
}

type WholeStoreT = {
  frebee: FreebeeStoreT,
  SelectedWords: SelectedWordsT,
  wordsArr: WordsArrT
}

type Words_listsT = {
  wordArr:Array<wordT>
}

// for compatibility right now , might not be needed when deploying
type wordT = {
  word: string,
  id:number
}

// New game response for type checking

// {
//   "letters": "licemp",
//   "center": "u",
//   "words": 52,
//   "total": 211,
//   "wordlist": [
//     "cecum",
//     "cellule",
//     "cilium",
//     "clue",
//     "clump",
//     "cull",
//     "culm",
//     "cumuli",
//     "cupel",
//     "cupule",
//     "emeu",
//     "ileum",
//     "ilium",
//     "illume",
//     "leucemic",
//     "lieu",
//     "limuli",
//     "luce",
//     "lull",
//     "lulu",
//     "lump",
//     "milieu",
//     "milium",
//     "mucluc",
//     "mule",
//     "mull",
//     "mumm",
//     "mump",
//     "mumu",
//     "muumuu",
//     "peculium",
//     "peepul",
//     "peplum",
//     "picul",
//     "pileum",
//     "pileup",
//     "pilule",
//     "plum",
//     "plume",
//     "plump",
//     "plumule",
//     "puce",
//     "pule",
//     "puli",
//     "pull",
//     "pullup",
//     "pulp",
//     "pumice",
//     "pummel",
//     "pump",
//     "pupil",
//     "uppile"
//   ]
// }

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
    combination:Array<string>
  }
  word_ids:Array<string>
}

type wordArrT = {
  game_id: string,
  wordArr_id: string,
  wordArr:Array<string>
}
// upto here for database compatibility

export type {
  CentralHexagonProp,
  HexagonProps,
  ProgressT,
  FreebeeStoreT,
  SelectedWordsT,
  WordsArrT,
  WholeStoreT,
  UserT,
  GameT, wordArrT,
  Words_listsT,
  wordT
}