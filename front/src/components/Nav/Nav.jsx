import {useState}from 'react'
import { assets } from '../../assets/assets';
import './Nav.css';

import { Link } from 'react-router-dom';
import profile from '../../assets/profile.png';
import ProfilePopup from '../ProfilePopUp/ProfilePopUp';
// eslint-disable-next-line react/prop-types
const Nav = ({ setShowLogin }) => {
  const[menu,setMenu]=useState("home");
  const [profilePopUp, setProfilePopUp] = useState(false);
  // check if user is already logged in:
  const authToken = localStorage.getItem('authToken');
 /* const handleLogOut = () => {
        localStorage.removeItem('authToken');
  }
  */
 const handleProfilePopUp =  () =>{
  console.log("in handle profile popUp");
  profilePopUp ? setProfilePopUp(false) : setProfilePopUp(true);
 }
  return (
    <div className='navbar' id='nav'>
        <img src={assets.logo} alt="Logo" className='logo'/>  
          <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}> Home</Link>
            <Link to= 'adopt-me' onClick={()=>setMenu("AdoptMe")}className={menu==="AdoptMe"?"active":""}>Adopt Me</Link>
            <Link to='forum' onClick={()=>setMenu("Forum")}className={menu==="Forum"?"active":""}>Forum</Link>
            <Link to= 'contacts'onClick={()=>setMenu("Contacts")} className={menu==="Contacts"?"active":""}>Contacts</Link>
           {/*} <a href='#footer' onClick={()=>setMenu("AboutUs")}className={menu==="AboutUs"?"active":""}>About Us</a>*/}
          </ul>
          <div className='navbar-right'>
          {(authToken)?
           <div style={{display: "flex", flexDirection: "row"}}>
            <img src={profile} alt="Profile"style={{width: 60, height: 60, cursor: "pointer"}} onClick={handleProfilePopUp} />
         
          </div> : <button onClick={()=>setShowLogin(true)}>Sign in</button>}
          {profilePopUp && 
          <ProfilePopup />}
          
          </div>
    </div>
  )
}
/*Nav.propTypes = {
setShowLogin: PropTypes.func.isRequired,};*/
export  default Nav;