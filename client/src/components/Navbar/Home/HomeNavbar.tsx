import Firstbar from "./FirstBar"
import Logobar from "./logobar"
import { useFetchUserFromSessionQuery } from '../../../data/store';
import { SessionPassportUserT } from "../../../types";
import UserPic from "./UserPic";


function HomeNavbar() {
  const response  = useFetchUserFromSessionQuery({})
  console.log(response)
  
  if (response.isLoading) {
    return <div>Loading...</div>;
  }
  
  if (response.isError) {
    return <div>Error fetching data</div>;
  }
  
  const info:SessionPassportUserT = response.data
  return (
    <nav
      className="flex w-[100%] justify-between bg-background-color text-black px-2 
        lg:px-4 items-center
          ">
          <Logobar />
      {info.IsUserInSession ? (<UserPic username={ info.User[0].username as string } /> ): (<Firstbar />) }
    </nav>
  )
}

export default HomeNavbar