import { Outlet } from "react-router-dom"
import { useFetchUserFromSessionQuery } from "../../../data/store"
import { SessionPassportUserT } from "../../../types"
import DashNavbar from "./DashNavbar"

function Dashboard() {
  const data = useFetchUserFromSessionQuery({})
  console.log(data)
  const User: SessionPassportUserT = data.data
  
   if (data.isLoading) {
    return (
      <div>Loading</div>
    )
  }
  else if (data.isError) {
    return (
      <div>Something went wrong</div>
    )
  }
  else if (!User.IsUserInSession) {
    window.open('http://localhost:5173/auth/sign-in')
    return
  }

  else if (User.User.length !== 1) {
    return (
      <div>Something wrong with the cookies , Please Sign In again!</div>
    )
  }


  else {
    return (
      <main className="grid grid-cols-dashboard-grid w-[100%] h-[100%] p-2 gap-2 items-center">
        <DashNavbar user={User.User[0]}/>
        <Outlet />
      </main>
    )
  }
  
}

export default Dashboard