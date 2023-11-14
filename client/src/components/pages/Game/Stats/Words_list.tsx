import { type wordArrPropsT } from "../../../../types"

function Words_list(props: wordArrPropsT) {
    console.log(props)
    return(
    <div className="border-[1px] w-[100%]  h-[32rem] border-primary rounded-lg px-4 py-2 flex flex-col gap-2 flex-wrap">
            {
                (props.wordArr.length > 0 && props.wordArr[0].wordList.length > 0) ?
                    props.wordArr[0].wordList.map((word) => <p className="border-b-[1px] w-[25%] border-secondary">
                        {word}
                    </p>)
                    : 'You have no words'}
    </div>
  )
}

export default Words_list