import { createSlice } from "@reduxjs/toolkit";
import fetchNewGame from "../thunks/game/fetchNewGame";

const NewGameSLice = createSlice({
    name: 'newGame',
    initialState: {
        Gamedata: [],
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
            state.Gamedata = action.payload
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