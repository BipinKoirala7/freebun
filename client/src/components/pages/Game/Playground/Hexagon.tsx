import { useDispatch } from "react-redux/es/hooks/useDispatch"

import { addWord } from "../../../../data/store"
import { type HexagonProps } from "../../../../types"

function getrequiredClass(x: string) {
    return x === 'top-right' ? 'relative top-[-5rem] left-[3rem] transform -translate-x-1/2'
        : x === 'top-left' ? 'relative  top-[-5rem] left-[12.5rem]'
        : x === 'left' ? 'relative  top-[0rem] left-[12.5rem] transform -translate-x-1/2'
        : x === 'right' ? 'relative  top-[0rem] left-[-6.5rem] transform -translate-x-1/2'
        : x === 'bottom-left' ? ' relative  top-[5rem] left-[-6.2rem]'
        : ' relative  top-[5rem] left-[-6.2rem]'

}


function Hexagon(props: HexagonProps) {
    const className: string = getrequiredClass(props.place)

    const dispatch = useDispatch()

    function handleClick() {
        dispatch(addWord(props.word))
    }
  return (
      <button className={className} onClick={() => handleClick()}>
          <svg  fill="#14213d" width="100px" height="100px" viewBox="0 0 56 56"
             xmlns="http://www.w3.org/2000/svg">
             <path
                d="M 7.5860 42.9414 L 23.8516 52.1758 C 26.6407 53.7695 29.3126 53.7930 32.1485 
                52.1758 L 48.4141 42.9414 C 50.5938 41.6992 51.7890 40.4336 51.7890 37.0352 L
                51.7890 18.8008 C 51.7890 15.4961 50.5703 14.3008 48.5783 13.1523 L 32.2657
                3.8711 C 29.3595 2.2070 26.5704 2.2305 23.7344 3.8711 L 7.4219 13.1523 C 5.4297
                14.3008 4.2110 15.4961 4.2110 18.8008 L 4.2110 37.0352 C 4.2110 40.4336 5.4063
                41.6992 7.5860 42.9414 Z" ></path>
              <text x="48%" y="60%" textAnchor="middle" fill="#e5e5e5" fontSize="15">{ props.word?.toUpperCase() }</text>
          </svg>
      </button>
  )
}

export default Hexagon

{/* <svg className={className} width="80px" height="80px" viewBox="-0.72 -0.72 25.44 25.44" 
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier"
             stroke-linecap="round" 
            stroke-linejoin="round">
        </g>
        <g id="SVGRepo_iconCarrier"> 
            <g clip-path="url(#clip0)"> 
                <path d="M6.32677 2.77363C6.43395 2.58799 6.63202 2.47363 6.84638 2.47363L17.1536 2.47363C17.3679 
                    2.47363 17.566 2.58799 17.6732 2.77363L22.8268 11.6999C22.9339 11.8856 22.9339 12.1143 22.8268 
                    12.2999L17.6732 21.2262C17.566 21.4118 17.3679 21.5262 17.1536 21.5262L6.84638 21.5262C6.63202 
                    21.5262 6.43395 21.4118 6.32677 21.2262L1.17318 12.2999C1.066 12.1143 1.066 11.8856 1.17318 
                    11.6999L6.32677 2.77363Z" 
                    stroke="#000000" stroke-width="0.192" stroke-linecap="round" stroke-linejoin="round">
                </path> 
                <text x="50%" y="50%" textAnchor="middle" fill="#000" fontSize="8">
                     5
                </text>
            </g> 
            <defs> 
                <clipPath id="clip0"> 
                    <rect width="24" height="24" fill="white">
                    </rect> 
                </clipPath> 
            </defs> 
        </g>
    </svg> */}