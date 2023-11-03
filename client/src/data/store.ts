import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { wordsReducer } from "./Slices/SelectedwordsSlics";
import wordArrSlice from "./Slices/wordArrSlice";
import addWordToArr from "./thunks/words/addWordtoArr";
import fetchWordArr from "./thunks/words/fetchWordsfromArr";

const Store = configureStore({
    reducer: {
        SelectedWords: wordsReducer,
        wordsArr: wordArrSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
    },
})

setupListeners(Store.dispatch)

export default Store
export * from './Slices/SelectedwordsSlics'
export * from './Slices/wordArrSlice'
export { addWordToArr, fetchWordArr }
export  type AppDispatch = typeof Store.dispatch