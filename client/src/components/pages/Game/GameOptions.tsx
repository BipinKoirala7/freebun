import { useDispatch } from "react-redux"
// import { clearWords } from "../../../data/store"
import { removeWord } from "../../../data/store"

import { SlRefresh } from 'react-icons/sl'

function GameOptions() {
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(removeWord())
    }
  return (
    <div className="flex justify-between px-4 py-1 w-[100%]">
          <button
              onClick={handleDelete}
              className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3 ">
            Delete
          </button>
          <button className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3 ">
            <SlRefresh className="text-[2rem]"/>
          </button>
          <button className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3 ">
            Enter
          </button>
    </div>
  )
}

export default GameOptions