import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios,{ AxiosResponse } from "axios";

const fetchWordArr = createAsyncThunk('fetch/wordArr', async() => {
    try {
        const wordArr: AxiosResponse = await axios.get('https://localhost:5173/words')
        const data = await wordArr.data
        console.log(data)
        return data
    }
    catch (error: unknown) {
        console.log(error)
        throw new Error(error as string)
        // check the kind of object and changed the type of the error
    }
})

export default fetchWordArr