import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {
        messageObj: {
            message: 'Welcome to FreeBee',
            id:'123456788'
        },
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
                state.messageObj = action.payload.messageObj
            }
            else if (action.payload.type === 'error') {
                console.log(action.payload)
                state.isSucess = false
                state.isError = true
                state.isNeutral = false
                state.messageObj = action.payload.messageObj
            }
            else {
                state.isSucess = false
                state.isError = false
                state.isNeutral = true
                state.messageObj = action.payload.messageObj
            }
        }
    }
})

export default notificationSlice
export const { changeMessage } = notificationSlice.actions