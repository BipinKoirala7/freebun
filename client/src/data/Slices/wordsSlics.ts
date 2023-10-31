import { createSlice } from "@reduxjs/toolkit";

const wordsSlice = createSlice({
    name: 'words',
    initialState: {
        selected: '',
    },
    reducers: {
        addWord(state, action) {
            state.selected += action.payload
        },
        removeWord(state) {
            const arr = state.selected.split('')
            arr.pop()
            state.selected = arr.join('')
            
        },
        clearWords(state) {
            state.selected=''
        }
    }
})

export const wordsReducer = wordsSlice.reducer
export const { addWord, removeWord ,clearWords} = wordsSlice.actions