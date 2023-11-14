import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import {  GameWholeDataT, HomePlayBtnPropsT } from "../../../types"
import { AppDispatch, fetchNewGame } from "../../../data/store"
import createWordsCollection from "../../../data/thunks/words/createWordsCollection"

function Play(props: HomePlayBtnPropsT) {
  const dispatch = useDispatch<AppDispatch>()
  const { User } = props.UserInfo
  console.log(User)
  const navigate = useNavigate()
  async function handleClick() {
    try {
      const response = await dispatch(fetchNewGame(User[0].user_id))
      if (fetchNewGame.fulfilled.match(response)) {
        console.log(response)
        const data: GameWholeDataT[] | undefined = response.payload
        console.log(typeof data)
        if (typeof data !== 'undefined') {
          await dispatch(createWordsCollection(data[0].gameId as string))
          navigate(`user/${User[0].user_id}/game/${data[0].gameId}`)
        }
        else {
          navigate('/')
        }
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex min-h-[50px] w-[100%] h-[100%] items-center justify-center ">
      <button
        onClick={handleClick}
        className="transition-class text-[1.5em]  font-secondary px-4 py-2 bg-primary text-black rounded-xl hover:bg-secondary-background hover:text-white"
      >Play Now!</button>
    </div>
  )
}

export default Play