import HomeNavbar from "../../Navbar/Home/HomeNavbar"
import HomeDescription from "./HomeDescription"
import Play from "./PlayBtn"
import { useFetchUserFromSessionQuery } from "../../../data/store"
import { SessionPassportUserT } from "../../../types"


export default function Home() {
  const response = useFetchUserFromSessionQuery({})
  console.log(response)
    if (response.isLoading) {
    return <div>Loading...</div>;
  }
  
  if (response.isError) {
    return <div>Error fetching data</div>;
  }

  const UserInfo:SessionPassportUserT = response.data

  return (
    <div className="max-w-[100%] w-[100%] min-h-screen 
        h-[100%] grid grid-rows-home-grid p-2">
      <HomeNavbar UserInfo={response.data}/>
      <HomeDescription />
      <Play UserInfo={UserInfo}/>
    </div>
  )
}

//         border-[10px] border-pink-500 
        // sm:border-green-500 md:border-orange-500
        // lg:border-blue-500 xl:border-red-500 
