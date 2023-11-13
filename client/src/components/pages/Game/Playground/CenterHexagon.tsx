import { useDispatch } from "react-redux"

import { addWord } from "../../../../data/store"
import { type CentralHexagonProp } from "../../../../types"

function Hexagon(props: CentralHexagonProp) {
  const dispatch = useDispatch()
  function handleClick() {
    dispatch(addWord(props.word?.toUpperCase()))
  }
  return (
      <button className="absolute" onClick={()=> handleClick()}>
            <svg className="" fill="#fca311" width="100px" height="100px" viewBox="0 0 56 56"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 
                    52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L
                    51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657
                    3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297
                    14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063
                    41.6992 7.5860 42.9414 Z" ></path>
              <text x="50%" y="60%" textAnchor="middle" fill="black" fontSize="15">{  props.word.toUpperCase()}</text>
            </svg>
      </button>
  )
}

export default Hexagon