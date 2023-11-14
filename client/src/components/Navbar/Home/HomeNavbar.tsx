import Firstbar from "./FirstBar"
import Logobar from "./logobar"
import { SessionPassportUserT,HomeNavbarPropsT } from "../../../types";
import UserPic from "./UserPic";


function HomeNavbar(props: HomeNavbarPropsT) {
  console.log(props)
  
  const info:SessionPassportUserT = props.UserInfo
  return (
    <nav
      className="flex w-[100%] justify-between bg-background-color text-black px-2 
        lg:px-4 items-center
          ">
          <Logobar />
      {info.IsUserInSession ? (<UserPic user_id={info.User[0].user_id as string} username={ info.User[0].username as string } /> ): (<Firstbar />) }
    </nav>
  )
}

export default HomeNavbar