import { createSlice } from "@reduxjs/toolkit";

const SelectedWordsSlice = createSlice({
    name: 'SelectedWords',
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

export const wordsReducer = SelectedWordsSlice.reducer
export const { addWord, removeWord ,clearWords} = SelectedWordsSlice.actions