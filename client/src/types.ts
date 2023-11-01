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
  WordsArr: WordsArrT
}

export type {
  CentralHexagonProp,
  HexagonProps,
  ProgressT,
  FreebeeStoreT,
  SelectedWordsT,
  WordsArrT,
  WholeStoreT
}