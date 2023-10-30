import bee_logo from '../../../assets/bee_logo.png'
import { useState } from 'react'
function UserPic() {
    const[IsON , setIsOn] = useState(false)
  return (
      <>
          <p>Welcome Bipin!</p>
          <div className='relative'>
              <img src={bee_logo} alt="" className="rounded-[50%]
                 border-secondary border-[1px] w-12 aspect-square"
                onClick={()=> setIsOn(prev => !prev)}
              />
              <div className={`absolute ${IsON ? 'flex': 'hidden'} flex-col top-full right-[50%] min-w-fit bg-secondary-background rounded-xl`}>
                  <button className='px-8 border-b-[2px] border-secondary py-3 hover:bg-primary hover:text-primary-background rounded-t-xl'>Dashboard</button>
                  <button className='px-8 py-3 hover:bg-primary hover:text-primary-background rounded-b-xl'>Sign Out</button>
              </div>
          </div>
      </>
  )
}

export default UserPic