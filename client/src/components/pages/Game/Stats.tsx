
function Stats() {
  return (
    <div className="w-[50%] grid grid-rows-stats-grid gap-2 p-4">
      <div className="w-[100%] border-[1px] border-primary">
        Beginner
        <div>
          this is the progess bar
        </div>
      </div>
      <div className="border-[1px] border-primary rounded-lg px-4 py-2">
        this is where the collection of the words that are selected is kept
      </div>
    </div>
  )
}

export default Stats