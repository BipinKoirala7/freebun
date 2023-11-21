import { useLocation } from "react-router-dom"
import { UserT } from "../../../../types"

function Overview() {
    const location = useLocation()
    console.log(location.state)
  const UserInfo: UserT = location.state
  if (location.state === null) {
    return (
      <div>loading...</div>
    )
  }
  else {
    return (
      <div className="w-full h-full px-2 py-2">
            <p className="text-[1.5rem]">{`Welcome ${UserInfo.username}`}</p>
      </div>
    )
  }
}

export default Overview