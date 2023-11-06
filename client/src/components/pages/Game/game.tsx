import Stats from "./Stats/Stats"
import Playground from "./Playground/Playground"
import { type AppDispatch } from "../../../data/store"
import { fetchWordArr } from "../../../data/store"
import {fetchNewGame} from "../../../data/store"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GameDataT, WholeStoreT } from "../../../types"

export default function Game() {
  const data:GameDataT = useSelector((state: WholeStoreT) => state.newGame)
  console.log(data)

  const dispatch = useDispatch<AppDispatch>()
  useEffect(() => {
    async function refreshData() {
      await dispatch(fetchNewGame())
      await dispatch(fetchWordArr())
  }
  refreshData()
  },[])
  return (
    <div className="w-[100%] h-[100%] flex justify-between gap-1">
      <Playground />
      <Stats />
    </div>
  )
}
