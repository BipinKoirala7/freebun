import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { FetchPreviousGameArgT } from "../../../types";


const fetchPreviousGame = createAsyncThunk<'fetch/previous_game' , FetchPreviousGameArgT>('fetch/previous_game',
    async ({ game_id, user_id }) => {
        console.log(game_id,user_id)
        try {
            const response: AxiosResponse = await axios.get(`http://localhost:4000/gameCollection/user/${user_id}/game/${game_id}`)
            const data = await response.data
            console.log(data)
            return data
        }
        catch (error) {
            console.log(error)
            // Error handling necessary
        }
    })

export default fetchPreviousGame