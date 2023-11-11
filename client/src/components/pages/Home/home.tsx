import HomeNavbar from "../../Navbar/Home/HomeNavbar"
import HomeDescription from "./HomeDescription"
import Play from "./PlayBtn"
import { useFetchUserFromSessionQuery } from "../../../data/store"


export default function Home() {
  const data = useFetchUserFromSessionQuery({})
  console.log(data.data)
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
