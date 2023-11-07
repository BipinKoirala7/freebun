import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios,{ AxiosResponse } from "axios";

const fetchWordArr = createAsyncThunk('fetch/wordArr', async(game_id:string) => {
    try {
        const wordArr: AxiosResponse = await axios.get(`http://localhost:3000/wordCollection?game_id=${game_id}`)
        const data = await wordArr.data
        console.log(data)
        console.log(data[0].wordArr)
        return data[0].wordArr
    }
    catch (error: unknown) {
        console.log(error)
        throw new Error(error as string)
        // check the kind of object and changed the type of the error
    }
})

export default fetchWordArr