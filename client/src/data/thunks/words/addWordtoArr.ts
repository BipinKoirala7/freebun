import axios, { AxiosResponse } from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const addWordToArr = createAsyncThunk<'add/wordCollection',{word:string,game_id:string}>('add/wordCollection', async ({word,game_id}) => {
    try {
        console.log(word,game_id)
        const response: AxiosResponse = await axios.patch(`http://localhost:4000/api/wordCollection/game/${game_id}/word`, {
            word:word
        })
        const data = await response.data
        console.log(data.data)
        return data.data
    }
    catch (err: unknown) {
        console.log(err)
        throw new Error(err as string)
        // check the kind of object and changed the type of the error
    }
})

export default addWordToArr