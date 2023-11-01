import axios, { AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const addWordToArr = createAsyncThunk('add/wordArr', async (word:string) => {
    try {
        const response: AxiosResponse = await axios.post('https://localhost:5173/words', {
            word
        })
        const data = await response.data
        console.log(data)
        return data
    }
    catch (err: unknown) {
        throw new Error(err as string)
        // check the kind of object and changed the type of the error
    }
})

export default addWordToArr