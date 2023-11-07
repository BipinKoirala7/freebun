import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";


const fetchPreviousGame = createAsyncThunk('fetch/previous_game',async() => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:3000/game?game_id=1234567890')
        const data = await response.data
        console.log(data)
    }
    catch (error) {
        console.log(error)
        // Error handling necessary
    }
})

export default fetchPreviousGame