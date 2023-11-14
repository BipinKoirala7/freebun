import {  createAsyncThunk } from "@reduxjs/toolkit";
import axios,{ AxiosResponse } from "axios";
import { ServerApiResponsePropsT, wordArrT } from "../../../types";

const fetchWordArr = createAsyncThunk('fetch/wordArr', async (game_id: string) => {
    console.log(game_id)
    try {
        const wordArr:AxiosResponse<ServerApiResponsePropsT<wordArrT>> = await axios.get(`http://localhost:4000/api/wordCollection/game/${game_id}`)
        const data =  wordArr.data
        console.log(data)
        return data.data[0]
    }
    catch (error: unknown) {
        console.log(error)
        throw new Error(error as string)
        // check the kind of object and changed the type of the error
    }
})

export default fetchWordArr