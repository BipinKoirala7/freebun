import { type ProgressT } from "../../../../types"

function Progress_bar(props: ProgressT) {
    console.log(`w-[${+props.progress * 1}%]`)
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-4">
        <p>Begineer</p>
        <div className={`h-[${+props.height}rem] bg-primary w-[100%] rounded-xl`}>
              <div style={{width:`${+props.progress}%`}} className={` h-[100%] bg-secondary text-black 
                rounded-xl flex justify-end items-center text-[0.8rem] transition-class `}>
                  1
            </div>
          </div>
          <p>Total Words: 1</p>
    </div>
  )
}

export default Progress_bar