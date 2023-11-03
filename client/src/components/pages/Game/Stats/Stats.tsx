import Progress_bar from "./Progress_bar"
import Words_list from "./Words_list"
import { WordsArrT, type WholeStoreT } from "../../../../types"

import { useSelector } from "react-redux/es/hooks/useSelector"


function Stats() {
  const { data, isError, isLoading }: WordsArrT = useSelector((state: WholeStoreT) => state.wordsArr)
  console.log(data, isError, isLoading)
  
  
  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <Progress_bar height="1" progress="9"  />
      <Words_list wordArr={data}/>
    </div>
  )
}

export default Stats