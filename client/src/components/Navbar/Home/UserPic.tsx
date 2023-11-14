import bee_logo from '../../../assets/person.png'
import { useState } from 'react'
import { UserPicT } from '../../../types'

import { Link } from 'react-router-dom'
function UserPic(props: UserPicT) {
    const[IsON , setIsOn] = useState(false)
  return (
      <div className='flex gap-4 items-center text-primary'>
          <p className=''>{props.username}!</p>
          <div className='relative'>
              <img src={bee_logo} alt=""
                  className="bg-transparent rounded-[50%] cursor-pointer w-12 aspect-square hover:border-[2px] hover:border-primary trnsition-class"
                onClick={()=> setIsOn(prev => !prev)}
              />
              <div className={`absolute ${IsON ? 'flex': 'hidden'} flex-col top-full right-[50%] min-w-fit bg-secondary-background rounded-xl`}>
                  <Link  to={`/user/${props.user_id}/dashboard`}
                    className='px-8 border-b-[2px] border-secondary py-3 
                         hover:bg-primary hover:text-primary-background rounded-t-xl'
                         >Dashboard</Link>
                  <button 
                    className='px-8 py-3 hover:bg-primary 
                         hover:text-primary-background rounded-b-xl'
                         >Sign Out</button>
              </div>
          </div>
      </div>
  )
}

export default UserPic