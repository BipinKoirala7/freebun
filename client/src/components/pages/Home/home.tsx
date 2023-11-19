import HomeNavbar from "../../Navbar/Home/HomeNavbar"
import HomeDescription from "./HomeDescription"
import Play from "./PlayBtn"
import { changeMessage, useFetchUserFromSessionQuery } from "../../../data/store"
import { SessionPassportUserT } from "../../../types"
import { useDispatch } from "react-redux"


export default function Home() {
  const dispatch = useDispatch()
  const response = useFetchUserFromSessionQuery({})
  console.log(response)
    if (response.isLoading) {
    return <div>Loading...</div>;
  }
  
  if (response.isError) {
    dispatch(changeMessage({type:'error',message:'Error Ocurred'}))
    return <div>Error fetching data</div>;
  }

  const UserInfo:SessionPassportUserT = response.data
  dispatch(changeMessage({type:'neutral',message:`Welcome ${UserInfo.User[0].username} !`}))
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
