import { createSlice } from "@reduxjs/toolkit";

import fetchWordArr from "../thunks/words/fetchWordsfromArr";
import addWordArr from "../thunks/words/addWordtoArr";
import createWordsCollection from "../thunks/words/createWordsCollection";
 
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
            console.log(action)
            state.isLoading = false
            state.data = [action.payload]
            state.error = null
        })
        builder.addCase(fetchWordArr.pending, (state,action) => {
            console.log(action)
            state.isLoading = true
            state.error = null
        })
        builder.addCase(fetchWordArr.rejected, (state, action) => {
            console.log(action)
            state.error = action.error
            state.isLoading = false
        })
        builder.addCase(addWordArr.pending, (state,action) => {
            console.log(action)
            state.isLoading = true
            state.error = null 
        })
        builder.addCase(addWordArr.fulfilled, (state, action) => {
            console.log(action)
            state.data = [action.payload]
            state.error = null
            state.isLoading = false
        })
        builder.addCase(addWordArr.rejected, (state, action) => {
            console.log(action)
            state.error = action.error
            state.isLoading = false
        })
        builder.addCase(createWordsCollection.pending, (state,action) => {
            console.log(action)
            state.isLoading = true
            state.error = null 
        })
        builder.addCase(createWordsCollection.fulfilled, (state, action) => {
            console.log(action)
            state.error = null
            state.isLoading = false
        })
        builder.addCase(createWordsCollection.rejected, (state, action) => {
            console.log(action)
            state.error = action.error
            state.isLoading = false
        })
    },
})

export default wordArrSlice