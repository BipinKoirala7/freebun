import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { ServerApiResponsePropsT, wordArrT } from "../../../types";

const createWordsCollection = createAsyncThunk('wordCollection/new',async (game_id:string)=>{
    console.log(game_id);
    try {
        const response:AxiosResponse<ServerApiResponsePropsT<wordArrT>> = await axios.get('http://localhost:4000/api/wordCollection/game/' + game_id + '/new')
        const data = response.data
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
})

export default createWordsCollection