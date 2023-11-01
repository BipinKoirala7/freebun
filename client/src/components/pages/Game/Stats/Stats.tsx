import Progress_bar from "./Progress_bar"
import Words_list from "./Words_list"

function Stats() {
  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <Progress_bar height="1" progress="9"  />
      <Words_list />
    </div>
  )
}

export default Stats