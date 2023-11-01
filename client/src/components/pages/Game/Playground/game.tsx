import Stats from "../Stats/Stats"
import Playground from "./Playground"

export default function Game() {
  return (
    <div className="w-[100%] h-[100%] flex justify-between gap-1">
      <Playground />
      <Stats />
    </div>
  )
}
