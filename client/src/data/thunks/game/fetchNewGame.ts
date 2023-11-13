import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import type {  GameWholeDataT, ServerApiResponsePropsT } from "../../../types";

const fetchNewGame = createAsyncThunk('fetch/new_game',async(user_id:string) => {
    try {
        const response: AxiosResponse<ServerApiResponsePropsT<GameWholeDataT>> = await axios.get(`http://localhost:4000/api/gameCollection/user/${user_id}/new`)
        const data = response.data.data
        console.log(data)
        return data
    }
    catch (error) {
        console.log(error)
        // Error handling necessary
    }
})

export default fetchNewGame