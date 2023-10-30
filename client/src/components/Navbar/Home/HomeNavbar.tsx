import Firstbar from "./FirstBar"
import Logobar from "./logobar"
function HomeNavbar() {
  return (
    <nav
      className="flex w-[100%] justify-between bg-background-color text-black px-2 
        lg:px-4 items-center
          ">
          <Logobar />
          <Firstbar />
    </nav>
  )
}

export default HomeNavbar