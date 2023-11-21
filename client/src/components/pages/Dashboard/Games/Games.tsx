import { useLocation } from "react-router-dom"
import { useEffect,useState } from 'react'
import { GameWholeDataT, ServerApiResponsePropsT, UserT } from "../../../../types"
import axios, { AxiosResponse } from "axios"
import { Link } from "react-router-dom"

function Games() {
  const location = useLocation()
  const UserInfo: UserT = location.state
  const [gameData, setGameData] = useState<Array<GameWholeDataT> | []>([])
  
  function presentGameData() {
    return gameData.map(game => {
      return (
        <div className="flex items-center w-full justify-between px-4 border-[1px] py-2 rounded-lg">
          <p>{`letters: ${game.gameInfo.letters}`}</p>
          <p>Center Word: {game.gameInfo.center}</p>
          <p>Total Words: {game.gameInfo.words}</p>
          {game.IsgameFinished ? <button className=" px-4 py-2 rounded-lg bg-secondary text-black">Delete</button> : <Link className=" px-4 py-2 rounded-lg bg-secondary text-black" to={`/user/${game.userId}/game/${game.gameId}`}>Continue</Link>}
        </div>
      )
    })
  }

  useEffect(() => {
    async function getData() {
      try {
        const response:AxiosResponse<ServerApiResponsePropsT<GameWholeDataT>> = await axios.get('http://localhost:4000/api/gameCollection/user/' + UserInfo.user_id)
        const data = response.data
        console.log(data.data)
        if (data.ok) {
          setGameData(data.data)
        }
        else if(data.error){
          throw new Error('Something went wrong')
        }
        else {
          setGameData([])
        }
      }
      catch (error) {
        console.log(error)
      }
    }
    getData()
  },[])
  return (
    <div className="w-full flex flex-col gap-4 h-full px-4 py-4">
      <p className="underline ">{UserInfo.username}, Here are the games you played</p>
      <div className="flex gap-4 flex-col w-full">
        {gameData.length > 0 ? presentGameData():`You haven't played a single game yet.`}
      </div>
    </div>
  )
}

export default Games