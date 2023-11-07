import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import type { GameApiResponseT } from "../../../types";

const fetchNewGame = createAsyncThunk('fetch/new_game',async() => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:4000/api/game/new')
        const data = await response.data
        const gameData: GameApiResponseT = data
        console.log(gameData)
        const obj = {
            gameId:nanoid(16),
            gameInfo:gameData.result
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