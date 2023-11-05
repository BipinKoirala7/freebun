import Progress_bar from "./Progress_bar"
import Words_list from "./Words_list"
import { fetchWordArr } from "../../../../data/store"
import { type AppDispatch } from "../../../../data/store"

import { useDispatch } from "react-redux"
import { useState,useEffect } from "react"
import { wordT } from "../../../../types"


function Stats() {
  const [data, setData] = useState<Array<wordT>>([])
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    async function refreshData() {
      const res = await dispatch(fetchWordArr())
      console.log(res)
      setData(res.payload)
  }
  
  refreshData()
  },[])
  
  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <Progress_bar height="1" progress="9"  />
      <Words_list wordArr={data}/>
    </div>
  )
}

export default Stats