import { WholeStoreT, type ProgressT, gameDataStoreT } from "../../../../types"
import { useSelector } from "react-redux"

function Progress_bar(props: ProgressT) {
  console.log(props)
  const { data }: gameDataStoreT = useSelector((state: WholeStoreT) => state.newGame)
  
  function getProgress() {
    const userWordListLength = props.userWordArr.length
    const totalwords = data[0].gameInfo.words
    const percent = (userWordListLength / totalwords) * 100
    console.log(percent)
    return percent
  }

  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-4">
        <p>Begineer</p>
        <div className={`h-[1rem] bg-primary w-[100%] rounded-xl`}>
              <div style={{width:`${+getProgress()}%`}} className={` h-[100%] bg-secondary text-black 
                rounded-xl flex justify-end items-center text-[0.8rem] transition-class `}>
                  
            </div>
          </div>
      <div className="flex gap-4">
        <p>Total Words: {data[0].gameInfo.words}</p>
        <hr className="border-[1px] border-secondary h-[100%]"/>
          <p>Your Words: { props.userWordArr.length }</p>
      </div>
    </div>
  )
}

export default Progress_bar