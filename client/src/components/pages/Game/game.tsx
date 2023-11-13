import Stats from "./Stats/Stats"
import Playground from "./Playground/Playground"
import { WholeStoreT, gameDataStoreT } from "../../../types"
import {fetchWordArr} from "../../../data/store"

import {  useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { useEffect } from 'react'
import fetchPreviousGame from "../../../data/thunks/game/fetchPreviousGame"
import { AppDispatch } from "../../../data/store"


export default function Game() {
  const dispatch = useDispatch<AppDispatch>()
  const params = useParams()
  console.log(params)
  const data:gameDataStoreT = useSelector((state: WholeStoreT) => state.newGame)
  console.log(data)

  useEffect(() => {
    console.log('use effect run')
    async function fetchGameData() {
      await dispatch(fetchWordArr(params.game_id as string))
      await dispatch(fetchPreviousGame({ user_id: params.user_id as string,game_id: params.game_id as string}))
    }
    fetchGameData()
  },[])

  if (data.isError) {
    return (
      <div>Something went wrong that we were not able to get new game</div>
    )
  }

  else {
    return (
      <div className="w-[100%] h-[100%] flex justify-between gap-1">
        <Playground gameData={data.data} />
        <Stats />
      </div>
    )
  }
}
