
import { Link } from 'react-router-dom';
function Logobar() {
  return (
      <Link to={'/'}>
          <p className='font-title text-[2em] px-4 py-1 outline-[1px] outline-dashed hover:outline-double transition-class rounded-xl text-white'>Freebee</p>
      </Link>
  )
}

export default Logobar