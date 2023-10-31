type StoreT = {
  words: {
    selected:string
  }
}
import { useSelector } from 'react-redux/es/exports'


import Hexagon from './Hexagon'
import CenterHexagon from './CenterHexagon'
import GameOptions from './GameOptions'

function Playground() {
  const { words } = useSelector<StoreT>(state => state)
  return (
      <div className="grid grid-rows-play-grid w-[50%] place-items-center gap-4  
        min-h-[100%] px-[1rem] bg-primary-background">
        <input type="text" className="text-center bg-transparent  leading-[3rem]
         outline-none border-none  p-1 text-[1.5rem] text-secondary"
        placeholder="Type or click"
        // onChange={(e) => handleChange(e)}
        value={words.selected}
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
        <GameOptions />
      </div>
  )
}

export default Playground