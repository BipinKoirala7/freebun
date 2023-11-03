import { useDispatch } from "react-redux"
import { SlRefresh } from 'react-icons/sl'
import { type AppDispatch } from "../../../../data/store"

import { removeWord } from "../../../../data/store"
import { addWordToArr } from '../../../../data/store'

function GameOptions(props:{currentWord:string}) {
    const dispatch = useDispatch<AppDispatch>()

    function handleDelete() {
        dispatch(removeWord())
  }
  
  function HandleEnter() {
    dispatch(addWordToArr(props.currentWord))
  }

  return (
    <div className="flex justify-between px-4 py-1 w-[100%]">
        <button
            onClick={handleDelete}
            className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3
              hover:bg-primary hover:text-secondary-background transition-class">
          Delete
        </button>
        <button className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3 hover:bg-primary hover:text-secondary-background transition-class">
          <SlRefresh className="text-[2rem]"/>
        </button>
        <button
          className="border-[1px] border-primary rounded-[1.5rem] px-6 py-3 hover:bg-primary
           hover:text-secondary-background transition-class"
          onClick={HandleEnter}
          >
            Enter
        </button>
    </div>
  )
}

export default GameOptions