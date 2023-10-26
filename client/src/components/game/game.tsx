
export default function Game() {
  return (
    <div className="w-[100%] h-[100%] flex justify-between gap-1">
      <div className="flex flex-col w-[50%] items-center justify-center gap-4  h-[100%] px-[10%]">
        <input type="text" className="bg-slate-900 caret-yellow-400 leading-[3em] outline-none border-none height-[1.5em] p-1"/>
        <div>
          Game is played here
        </div>
        <div className="flex justify-between px-4 py-1 w-[100%]">
          <button className="border-[1px] border-black rounded-2xl px-4 py-2 ">
            Delete
          </button>
          <button className="border-[1px] border-black rounded-2xl px-4 py-2 ">
            Shuffle
          </button>
          <button className="border-[1px] border-black rounded-2xl px-4 py-2 ">
            Enter
          </button>
        </div>
      </div>
      <div className="w-[50%]">

      </div>
    </div>
  )
}
