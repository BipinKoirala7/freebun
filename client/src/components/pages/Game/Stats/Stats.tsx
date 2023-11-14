import Progress_bar from "./Progress_bar"
import Words_list from "./Words_list"
import {  wordArrStoreT, type WholeStoreT } from "../../../../types"


import { useSelector } from "react-redux"


function Stats() {
  const result:wordArrStoreT = useSelector((state: WholeStoreT) => state.wordsArr)
  console.log(result)
  
  if (result.data.length === 0) {
    return (
    <div>data not available</div>
  )
}

  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <Progress_bar userWordArr={result.data[0].wordList} />
      {/* progress is consider by taking in account to the whole array of the list of the possible words */}
      <Words_list wordArr={result.data}/>
    </div>
  )
}

export default Stats