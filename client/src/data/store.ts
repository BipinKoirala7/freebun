import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { wordsReducer } from "./Slices/SelectedwordsSlics";
import wordArrSlice from "./Slices/wordArrSlice";
import addWordToArr from "./thunks/words/addWordtoArr";
import fetchWordArr from "./thunks/words/fetchWordsfromArr";
import NewGameSLice from "./Slices/NewGameSlice";
import fetchNewGame from "./thunks/game/fetchNewGame";

const Store = configureStore({
    reducer: {
        SelectedWords: wordsReducer,
        wordsArr: wordArrSlice.reducer,
        newGame: NewGameSLice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
    },
})

setupListeners(Store.dispatch)

export default Store
export * from './Slices/SelectedwordsSlics'
export * from './Slices/wordArrSlice'
export * from './Slices/NewGameSlice'
export { addWordToArr, fetchWordArr,fetchNewGame }
export  type AppDispatch = typeof Store.dispatch