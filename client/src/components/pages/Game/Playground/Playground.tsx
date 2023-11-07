import { useSelector } from 'react-redux/es/exports'


import Hexagon from './Hexagon'
import CenterHexagon from './CenterHexagon'
import GameOptions from './GameOptions'
import { GameData, WholeStoreT } from '../../../../types'
import { type SelectedWordsStoreT } from '../../../../types'

function Playground(props: { gameData: GameData[] | [] }) {
  const letters = props.gameData.length > 0 && props.gameData[0].gameInfo ? props.gameData[0].gameInfo.letters.split(''): []
  console.log(props)
  const data: SelectedWordsStoreT = useSelector((state:WholeStoreT) => state.SelectedWords)
  console.log(letters)
  return (
      <div className="grid grid-rows-play-grid w-[50%] place-items-center gap-4  
        min-h-[100%] px-[1rem] bg-primary-background">
        <input type="text" className="text-center bg-transparent  leading-[3rem]
         outline-none border-none  p-1 text-[1.5rem] text-secondary"
        placeholder="Type or click"
        // onChange={(e) => handleChange(e)}
        value={data.selected}
          />
          <div className='flex items-center justify-center'>
              <Hexagon place='left' word={letters[0]}/>
              <Hexagon place='top-left' word={letters[1]}/>
              <Hexagon place='top-right' word={letters[2]}/>
              {props.gameData.length > 0 && props.gameData[0].gameInfo && 
              <CenterHexagon word={props.gameData[0].gameInfo.center} />}
              <Hexagon place='bottom-right' word={letters[3]}/>
              <Hexagon place='bottom-left' word={letters[4]}/>
              <Hexagon place='right' word={letters[5]}/>
              
          </div>
      <GameOptions currentWord={data.selected} />
      </div>
  )
}

export default Playground