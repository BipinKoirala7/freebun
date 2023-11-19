import { useEffect } from 'react'
import { Toaster, toast } from 'react-hot-toast'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";

import { useSelector } from 'react-redux'
import { NotificationStoreT, WholeStoreT } from '../../../types'
import { Toast } from 'react-hot-toast/headless';

function Notification() {
    const {message, isError, isNeutral, isSucess}: NotificationStoreT = useSelector((state: WholeStoreT) => state.notification)
    
  const CloseBtn= (t:Toast) => (
    <button
      className=' px-2 py-3 text-primary rounded-r-lg'
      onClick={()=> toast.dismiss(t.id)}
    >
      <IoIosCloseCircleOutline className="text-[2rem]"/></button>)
  
  console.log(message, isError, isSucess, isNeutral)
  useEffect(() => {
    if (isError) {
      console.log('error')
      toast.custom((t) => (
        <div className='flex items-center rounded-lg bg-red-500'>
          <div className='bg-red-700 h-full px-3 flex items-center rounded-l-lg'>✖</div>
          <div className='px-4 py-2'>
            {message}
          </div>
          {CloseBtn(t)}
        </div>
      ))
    }
    else if (isSucess) {
      console.log('sucess')
      toast.custom((t) => (
        <div className='flex items-center bg-green-700 rounded-lg'>
          <div className='bg-green-800 h-full px-3 flex items-center rounded-l-lg'>✔</div>
          <div className='rounded-l-lg bg-green-700 h-full flex items-center px-4
          py-4'>
           {message}
          </div>
          {CloseBtn(t)}
        </div>
      ))
    }
    else if (isNeutral) {
      console.log('neutral')
      toast.custom((t) => (
        <div className='flex items-center bg-secondary-background text-primary
        rounded-lg '
        >
          <div className='bg-slate-400 h-full px-3 flex items-center rounded-l-lg'><RiErrorWarningLine className="text-[1.5rem]"/></div>
          <div className=' px-4 py-3'>
            {message}
          </div>
          {CloseBtn(t)}
        </div>
      ))
    }
    },[])
  return (
    <Toaster position='bottom-left' reverseOrder={true}/>  
  )
}

export default Notification