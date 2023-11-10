import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import type { GameApiResponseT } from "../../../types";

const fetchNewGame = createAsyncThunk('fetch/new_game',async(user_id:string) => {
    try {
        const response: AxiosResponse<GameApiResponseT> = await axios.get(`http://localhost:4000/api/gameCollection/user/${user_id}/new`)
        const data = response.data
        const obj = {
            gameId:nanoid(16),
            gameInfo: data.result
        }
        console.log(obj)
        return obj
    }
    catch (error) {
        console.log(error)
        // Error handling necessary
    }
})

export default fetchNewGame