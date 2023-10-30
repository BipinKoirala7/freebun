// import bee_logo from '../../assets/bee_logo.png'
// import UserPic from './UserPic'
import { Link } from "react-router-dom"

function Firstbar() {
  return (
    <nav className=" text-white font-secondary flex gap-3 py-4 rounded-lg items-center justify-evenly ">
      <Link to={'/auth/register'} className="outline-[1px] outline-dashed  outline-slate-300 rounded-xl px-3 py-2
       hover:bg-secondary hover:outline-none transition-class">Register</Link> 
      <Link to={'/auth/sign-in'} className="outline-[1px] outline-dashed  outline-slate-300 rounded-xl px-3 py-2
       hover:bg-secondary hover:outline-none transition-class">Sign In</Link>
      {/* <UserPic /> */}
    </nav>
  )
}

export default Firstbar