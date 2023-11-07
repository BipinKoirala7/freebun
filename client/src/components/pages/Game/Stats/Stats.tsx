import Progress_bar from "./Progress_bar"
import Words_list from "./Words_list"
import {  type WholeStoreT, wordArrStoreT } from "../../../../types"


import { useSelector } from "react-redux"


function Stats() {
  const result:wordArrStoreT = useSelector((state: WholeStoreT) => state.wordsArr)
  console.log(result)
  
  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <Progress_bar height="1" progress="9" />
      {/* progress is consider by taking in account to the whole array of the list of the possible words */}
      <Words_list wordArr={result.data}/>
    </div>
  )
}

export default Stats