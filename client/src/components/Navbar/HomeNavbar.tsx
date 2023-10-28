import Firstbar from "./Welcomebar"
import Logobar from "./logobar"
function HomeNavbar() {
  return (
      <nav className="flex w-[100%] justify-between bg-background-color text-black rounded-xl items-center">
          <Logobar />
          <Firstbar />
    </nav>
  )
}

export default HomeNavbar