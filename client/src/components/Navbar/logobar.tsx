import Logo from '../../assets/bee_logo.png';
import { Link } from 'react-router-dom';

function Logobar() {
  return (
      <Link to={'/'}>
          <img src={Logo} alt="" className='fixed top-4 left-4 rounded-xl w-[7em] aspect-square'/>
      </Link>
  )
}

export default Logobar