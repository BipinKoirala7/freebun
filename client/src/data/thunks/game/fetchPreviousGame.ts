import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

import { FetchPreviousGameArgT } from "../../../types";


const fetchPreviousGame = createAsyncThunk<'fetch/previous_game' , FetchPreviousGameArgT>('fetch/previous_game',
    async ({ game_id, user_id }) => {
        console.log(game_id,user_id)
        try {
            const response: AxiosResponse = await axios.get(`http://localhost:4000/api/gameCollection/user/${user_id}/game/${game_id}`)
            const data = response.data
            console.log(data)
            if (data.ok) {
                console.log(data.data[0])
                return data.data[0]
            }
            else {
                return
            }
            
        }
        catch (error) {
            console.log(error)
            // Error handling necessary
        }
    })

export default fetchPreviousGame