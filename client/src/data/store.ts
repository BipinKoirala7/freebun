import { configureStore } from "@reduxjs/toolkit";
import { setupListeners} from '@reduxjs/toolkit/dist/query'
import beeApi from "./Apis/freebee";

const userStore = configureStore({
    reducer: {
        freebee:beeApi.reducer
    },
    middleware(getDefaultMiddleware) {
        return getDefaultMiddleware()
        .concat(beeApi.middleware)
    },
})

setupListeners(userStore.dispatch)