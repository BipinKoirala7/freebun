import HomeNavbar from "../../Navbar/Home/HomeNavbar"
import HomeDescription from "./HomeDescription"
import Play from "./PlayBtn"
import { type SessionPassportUserT } from "../../../types"

import { useEffect } from "react"
import axios from "axios"
// import { useNavigate } from "react-router-dom"

export default function Home() {
  // const navigate = useNavigate()
  useEffect(() => {
    async function findUserFromSession() {
      const res = await axios.get('http://localhost:4000/api/session/user',{withCredentials:true})
      const data: SessionPassportUserT = await res.data
      console.log(data)
      // if (!data.IsUserInSession) {
      //    navigate('/auth/register')
      // }
    }
    findUserFromSession()
  },[])
  return (
    <div className="max-w-[100%] w-[100%] min-h-screen 
        h-[100%] grid grid-rows-home-grid p-2">
      <HomeNavbar />
      <HomeDescription />
      <Play />
    </div>
  )
}

//         border-[10px] border-pink-500 
        // sm:border-green-500 md:border-orange-500
        // lg:border-blue-500 xl:border-red-500 
