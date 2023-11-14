import { useParams } from "react-router-dom"

function Dashboard() {
    const data = useParams()
    console.log(data)
  return (
    <main className="flex w-[100%] h-[100%] p-2 gap-2 items-center">
      <div className="h-[100%] shrink-[4] grow border-[1px] border-r-0 rounded-l-3xl p-4 ">
        <div className="">Dashboard Navbar</div>
      </div>
      <hr className="border-[1px] border-secondary h-[90%]"/>
      <div className="h-[100%] border-[1px] shrink grow-[4] border-l-0 rounded-r-3xl">
        All the user related information is shown here
      </div>
    </main>
  )
}

export default Dashboard