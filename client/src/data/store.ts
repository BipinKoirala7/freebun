import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/dist/query'

import { wordsReducer } from "./Slices/SelectedwordsSlics";
import wordArrSlice from "./Slices/wordArrSlice";
import NewGameSLice from "./Slices/NewGameSlice";
import notificationSlice from "./Slices/notificationSlices";

import addWordToArr from "./thunks/words/addWordtoArr";
import fetchWordArr from "./thunks/words/fetchWordsfromArr";
import fetchNewGame from "./thunks/game/fetchNewGame";

import { UserInfoApi } from "./Apis/userApis";

const Store = configureStore({
    reducer: {
        [UserInfoApi.reducerPath]:UserInfoApi.reducer,
        SelectedWords: wordsReducer,
        wordsArr: wordArrSlice.reducer,
        newGame: NewGameSLice.reducer,
        notification:notificationSlice.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
            .concat(UserInfoApi.middleware)
    },
})

setupListeners(Store.dispatch)

export default Store
export * from './Slices/SelectedwordsSlics'
export * from './Slices/wordArrSlice'
export * from './Slices/NewGameSlice'
export * from './Slices/notificationSlices'
export * from './Apis/userApis'
export { addWordToArr, fetchWordArr,fetchNewGame }
export  type AppDispatch = typeof Store.dispatch