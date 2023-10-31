import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from '@reduxjs/toolkit/dist/query'
import beeApi from "./Apis/freebee";
import { wordsReducer } from "./Slices/wordsSlics";

const userStore = configureStore({
    reducer: {
        freebee: beeApi.reducer,
        words:wordsReducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
        .concat(beeApi.middleware)
    },
})

setupListeners(userStore.dispatch)

export default userStore
export * from './Slices/wordsSlics'