import { Link } from 'react-router-dom'
import './Header.css'
const Header=()=> {
  return (
    <div className='header'>
        <div className='header-contents'>
            <h2>Find your perfect <br></br>
                companion with us </h2>
            <p>Connect with Your Ideal Furry Friend<br>
            </br> Explore Pet Adoption and Interact with Fellow Pet Keepers</p>
            <Link to='/adopt-me'>
            <button>Choose Your Pet </button>
            </Link>
        </div>
    </div>
  )
}
export default Header
