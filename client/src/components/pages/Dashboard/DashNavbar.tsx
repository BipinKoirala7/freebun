import { UserT } from "../../../types"
import { CiLogout } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { getRoute } from "../../../lib/util";

function DashNavbar(props: { user: UserT }) {
    const location = useLocation()
    console.log(location)
    const route = getRoute(location.pathname)
    const { user } = props
    return (
      <div className="flex flex-col gap-8 items-center py-4 border-r-[1px] border-slate-500">
          <img className="rounded-full w-24 ring ring-secondary aspect-square"
              src={user.photos} alt="" />
          <div>
              <p className="font-title text-[1.3rem]">{user.username}</p>
          </div>
            <div className="flex flex-col px-5 gap-4 border-b-[1px] border-slate-500 border-t-[1px] py-8">
                <NavLink
                    state={user}
                    className={
                        () =>`${route=== 'overview' ? 'bg-primary text-secondary-background': ''} border-l-[10px] border-[1px] rounded-[0.5rem] px-12 py-3 text-[1.1rem] transition-class active:bg-secondary active:text-black `
                    }
                to="" >Overview</NavLink>
              <NavLink
                state={user}
                className={
                    ({ isActive }) =>`${isActive ? 'bg-primary text-secondary-background': ''} border-l-[10px] border-[1px] rounded-[0.5rem] px-12 py-3 text-[1.1rem] transition-class active:bg-secondary active:text-black `
                }
                to={`/user/${user.user_id}/dashboard/games`} >Games</NavLink>
              
              <NavLink
                state={user}
                className={
                    ({ isActive }) =>`${isActive ? 'bg-primary text-secondary-background': ''} border-l-[10px] border-[1px] rounded-[0.5rem] px-12 py-3 text-[1.1rem] transition-class active:bg-secondary active:text-black `
                    
                }
                to={`/user/${user.user_id}/dashboard/account`} >Account</NavLink>
            </div>
            <button className="flex items-center gap-2 bg-secondary text-black px-10 py-2 rounded-lg">
                <p className="">Sign Out</p>
                <CiLogout className="text-[2rem]" />
            </button>
      </div>
    )
}

export default DashNavbar