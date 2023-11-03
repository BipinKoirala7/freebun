import { useSelector } from 'react-redux/es/exports'


import Hexagon from './Hexagon'
import CenterHexagon from './CenterHexagon'
import GameOptions from './GameOptions'
import { WholeStoreT } from '../../../../types'
import { type SelectedWordsT } from '../../../../types'

function Playground() {
  const data: SelectedWordsT = useSelector((state:WholeStoreT) => state.SelectedWords)
  console.log(data)
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
              <Hexagon place='left' word='A'/>
              <Hexagon place='top-left' word='B'/>
              <Hexagon place='top-right' word='C'/>
              <CenterHexagon  word='D'/>
              <Hexagon place='bottom-right' word='E'/>
              <Hexagon place='bottom-left' word='F'/>
              <Hexagon place='right' word='G'/>
              
          </div>
      <GameOptions currentWord={data.selected} />
      </div>
  )
}

export default Playground