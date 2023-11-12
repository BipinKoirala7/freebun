import { useState } from 'react'
import Google_Png from '../../../../assets/google_png.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import Logobar from '../../../Navbar/Home/logobar'

function Register() {
    const [UserInfo, SetUserInfo] = useState({})
    
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        SetUserInfo(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }
    
    console.log(UserInfo)
    function handleGoogleClick() {
        window.open('http://localhost:4000/auth/google','_self')
    }

    async function handleLocalClick() {
        try {
            const res = await axios.post('http://localhost:4000/auth/register',UserInfo)
            const data = await res.data
            console.log(data)
        } catch (error) {
            console.log(error)  
        }
    }
  return (
      <main className="flex items-center justify-center h-[100%] p-4">
          <div className='flex  border-[1px] border-primary rounded-xl w-fit h-fit place-items-center'>
              <div className="hidden w-[50%] max-w-[50%] 
                lg:flex lg:flex-col items-center justify-center border-r-[1px] 
                 leading-[2em] px-16 py-16 gap-8
                font-secondary">
                  <Link to={'/'} className='font-title text-[3em] underline'>FreeBee :</Link>
                  <span className='text-[2em]'>Spell For Free!</span>
                </div>   

                <div className="flex flex-col gap-2 lg:w-[50%] px-16 py-4 items-center justify-center">
                    <h1 className="text-[2.5em] text-secondary">Register</h1>
                    <button onClick={handleGoogleClick} className="flex flex-row border-[1px] rounded-xl gap-2 items-center w-[100%] py-2 justify-center hover:bg-primary hover:text-primary-background transition-class">
                        <img src={Google_Png} alt="" className="aspect-square w-6 "/>
                        <p>Sign Up with Google</p>
                    </button>
                <div className="flex w-[100%] gap-2 items-center justify-center mt-4">
                    <hr className="border-secondary border-[1px] min-w-[20%]"/>
                    <p className="text-[0.8em]">Sign Up with Email</p>
                    <hr className="border-secondary border-[1px] min-w-[20%]"/>  
                </div>    
                <div className="flex flex-col gap-2  p-2 w-[100%]">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        id="username"
                        name='username'
                        onChange={(e=> handleChange(e))}
                        className="leading-[2em] px-4 py-2 rounded-md bg-transparent text-secondary border-[1px] border-primary outline-none" 
                        placeholder="Ex. Bipin"/>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        name='email'  
                        onChange={(e=> handleChange(e))}
                        className="leading-[2em] px-4 py-2 rounded-md bg-transparent text-secondary border-[1px] border-primary outline-none" 
                        placeholder="Ex.**********@gmail.com"/>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name='password'
                        onChange={(e=> handleChange(e))}
                        className="leading-[2em] px-4 py-2 rounded-md bg-transparent text-secondary border-[1px] border-primary outline-none" 
                        placeholder="?**********" />
                </div>
                  <button
                      onClick={handleLocalClick}
                      className="bg-secondary text-primary-background w-full py-3 rounded-md hover:bg-primary transition-class">
                    Sign Up
                </button>
                <div className="flex gap-1">
                    <span className="text-[0.7em]">Already a member?</span> 
                    <Link to={'/auth/sign-in'} className="text-secondary text-[0.7em] w-fit ">Sign In</Link>  
                </div>    
              </div>
        </div>
      </main>
  )
}

export default Register