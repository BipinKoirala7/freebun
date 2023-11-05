import { createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

const fetchNewGame = createAsyncThunk('fetch/new_game',async() => {
    try {
        const response: AxiosResponse = await axios.get('http://localhost:4000/api/game/new')
        const data = await response.data
        console.log(data)
        return data

    }
    catch (error) {
        console.log(error)
        // Error handling necessary
    }
})

export default fetchNewGame