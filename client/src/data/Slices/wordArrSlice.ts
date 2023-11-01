import { createSlice } from "@reduxjs/toolkit";

import fetchWordArr from "../thunks/words/fetchWordsfromArr";
import addWordArr from "../thunks/words/addWordtoArr";
 
const wordArrSlice = createSlice({
    name: 'wordArr',
    initialState: {
        data: [],
        isLoading: false,
        error:null
    },
    reducers: {
        
    },
    extraReducers(builder) {
        builder.addCase(fetchWordArr.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.error = null
        })
        builder.addCase(fetchWordArr.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchWordArr.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
        builder.addCase(addWordArr.pending, (state) => {
            state.isLoading = true
            state.error = null 
        })
        builder.addCase(addWordArr.fulfilled, (state, action) => {
            state.data = action.payload
            state.error = null
            state.isLoading = false
        })
        builder.addCase(addWordArr.rejected, (state, action) => {
            state.error = action.error
            state.isLoading = false
        })
    },
})

export const wordsArrReducer = wordArrSlice.reducer