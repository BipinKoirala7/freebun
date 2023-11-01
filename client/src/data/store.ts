import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import beeApi from "./Apis/freebee";
import { wordsReducer } from "./Slices/SelectedwordsSlics";
import { wordsArrReducer } from "./Slices/wordArrSlice";
import addWordToArr from "./thunks/words/addWordtoArr";
import fetchWordArr from "./thunks/words/fetchWordsfromArr";

const userStore = configureStore({
    reducer: {
        freebee: beeApi.reducer,
        SelectedWords: wordsReducer,
        wordsArr: wordsArrReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
        .concat(beeApi.middleware)
    },
})

setupListeners(userStore.dispatch)

export default userStore
export * from './Slices/SelectedwordsSlics'
export * from './Slices/wordArrSlice'
export * from './Apis/freebee'
export { addWordToArr, fetchWordArr }