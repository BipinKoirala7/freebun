import { Link } from "react-router-dom"

function Play() {
  return (
    <div className="flex min-h-[50px] w-[100%] h-[100%] items-center justify-center ">
          <Link to={'/game'} className="transition-class text-[1.5em] font-secondary px-4 py-2 bg-primary text-black rounded-xl hover:bg-secondary-background hover:text-white">Play Now!</Link>
    </div>
  )
}

export default Play