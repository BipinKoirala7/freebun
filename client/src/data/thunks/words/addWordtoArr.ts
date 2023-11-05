import axios, { AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const addWordToArr = createAsyncThunk('add/wordArr', async (word:string) => {
    try {
        console.log(word)
        const response: AxiosResponse = await axios.post('http://localhost:3000/wordArr', {
            word:word
        })
        const data = await response.data
        console.log(data)
        return data
    }
    catch (err: unknown) {
        console.log(err)
        throw new Error(err as string)
        // check the kind of object and changed the type of the error
    }
})

export default addWordToArr