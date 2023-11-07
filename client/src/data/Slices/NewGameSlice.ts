import { createSlice } from "@reduxjs/toolkit";
import fetchNewGame from "../thunks/game/fetchNewGame";
import fetchPreviousGame from "../thunks/game/fetchPreviousGame";

const NewGameSLice = createSlice({
    name: 'newGame',
    initialState: {
        data: [],
        isLoading: false,
        isError:null
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchNewGame.pending, (state, action) => {
            console.log(action)
            state.isLoading = true;
            state.isError = null
        })
        builder.addCase(fetchNewGame.fulfilled, (state, action) => {
            console.log(action)
            state.data = [{...action.payload}]
            state.isError = null
            state.isLoading= false
        })
        builder.addCase(fetchPreviousGame.rejected, (state, action) => {
            state.isError = action.error
            state.isLoading = false
        })
        // previous game
        builder.addCase(fetchPreviousGame.pending, (state, action) => {
            console.log(action)
            state.isLoading = true;
            state.isError = null
        })
        builder.addCase(fetchPreviousGame.fulfilled, (state, action) => {
            console.log(action)
            state.data = [{...action.payload}]
            state.isError = null
            state.isLoading= false
        })
        builder.addCase(fetchNewGame.rejected, (state, action) => {
            state.isError = action.error
            state.isLoading = false
        })
    },
})

export default NewGameSLice