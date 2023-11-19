import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        message: 'Welcome to Free Bee',
        isError: false,
        isSucess: false,
        isNeutral: true
    },
    reducers: {
        changeMessage(state,action) {
            if (action.payload.type === 'success') {
                state.isSucess = true
                state.isError = false
                state.isNeutral = false
                state.message = action.payload.message
            }
            else if (action.payload.type === 'error') {
                console.log(action.payload)
                state.isSucess = false
                state.isError = true
                state.isNeutral = false
                state.message = action.payload.message
            }
            else {
                state.isSucess = false
                state.isError = false
                state.isNeutral = true
                state.message = action.payload.message
            }
            state.message = action.payload.message
        }
    }
})

export default notificationSlice
export const { changeMessage } = notificationSlice.actions