import { useDispatch } from "react-redux"
import { SlRefresh } from 'react-icons/sl'
import { v4 as uuidv4 } from 'uuid';

import { changeMessage, type AppDispatch } from "../../../../data/store"

import { removeWord } from "../../../../data/store"
import { clearWords } from "../../../../data/store"
import { addWordToArr } from '../../../../data/store'
import { capitalizeWord } from "../../../../lib/util";

function GameOptions(props:{currentWord:string,game_id:string,centerWord:string}) {
  console.log(props)  
  const dispatch = useDispatch<AppDispatch>()

    function handleDelete() {
        dispatch(removeWord())
  }
  
  function HandleEnter() {
    if (props.currentWord.split('').length <= 3) {
      console.log('word length must be greater than 3 characters')
      dispatch(changeMessage({ type: 'error', messageObj:{message: 'Words must be at least 3 characters',id:uuidv4()} }))
    }
    else if (!props.currentWord.split('').includes(props.centerWord.toUpperCase())) {
      console.log('word must contain the center word')
      dispatch(changeMessage({ type: 'error', messageObj: {message:`Center word ${props.centerWord.toUpperCase()}  must be in the word` ,id:uuidv4()}}))
    }
    else {
      console.log('word follow the required condition')
      dispatch(addWordToArr({word:capitalizeWord(props.currentWord),game_id:props.game_id}))
      dispatch(clearWords())
    }
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