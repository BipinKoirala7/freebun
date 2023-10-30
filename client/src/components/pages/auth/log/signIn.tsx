import { Link } from 'react-router-dom'
import Google_Png from '../../../../assets/google_png.png'
function SignIn() {
  return (
    // import Logobar from '../../../Navbar/Home/logobar'
        <main className="flex items-center justify-center h-[100%] p-4">
          <div className='flex  border-[1px] border-primary rounded-xl w-fit h-fit place-items-center'>
            <div className="hidden w-[50%] max-w-[50%] 
                lg:flex lg:flex-col items-center justify-center border-r-[1px] 
                 leading-[2em] px-8 py-16 gap-8
                font-secondary">
              <Link to={'/'} className='font-title underline text-[3em]'>FreeBee :</Link>
              <span className='text-[2rem]'>Unleash Your Inner Speller</span>
            </div>

            <div className="flex flex-col gap-2 lg:w-[50%] px-16 py-4 items-center justify-center">
              <h1 className="text-[2.5em] text-secondary">Sign In</h1>
              <button className="flex flex-row border-[1px] rounded-xl gap-2 items-center w-[100%] py-2 justify-center hover:bg-primary hover:text-primary-background transition-class">
                <img src={Google_Png} alt="" className="aspect-square w-6 " />
                <p>Sign In with Google</p>
              </button>
              <div className="flex w-[100%] gap-2 items-center justify-center mt-4">
                <hr className="border-secondary border-[1px] min-w-[20%]" />
                <p className="text-[0.8em]">Sign In with Email</p>
                <hr className="border-secondary border-[1px] min-w-[20%]" />
              </div>
              <div className="flex flex-col gap-2  p-2 w-[100%]">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="leading-[2em] px-4 py-2 rounded-md bg-transparent text-secondary border-[1px] border-primary outline-none" placeholder="Ex.**********@gmail.com" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="leading-[2em] px-4 py-2 rounded-md bg-transparent text-secondary border-[1px] border-primary outline-none" placeholder="?**********" />
                <button className="text-secondary w-fit text-[0.7em]">Forget Password?</button>
              </div>
              <button className="bg-secondary text-primary-background w-full py-3 rounded-md hover:bg-primary transition-class">
                Sign Up
              </button>
              <div className="flex gap-1">
                <span className="text-[0.7em]">Not a Member?</span>
                <Link to={'/auth/register'} className="text-secondary text-[0.7em] w-fit ">Create an account</Link>
              </div>
            </div>
          </div>
        </main>
      )
    }

export default SignIn