import HomeNavbar from "../../Navbar/HomeNavbar"
import HomeDescription from "./HomeDescription"
import Play from "./PlayBtn"

export default function Home() {
  return (
    <div className="max-w-[100%] w-[100%] border-[1px] border-pink-500 
        sm:border-green-500 md:border-orange-500
        lg:border-blue-500 xl:border-red-500 h-[100%] gap-2
        grid grid-rows-home-grid">
      <HomeNavbar />
      <HomeDescription />
      <Play />
    </div>
  )
}
