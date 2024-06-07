// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './ProfilePopUp.css';
import profile from '../../assets/profil.png';
import logout from '../../assets/logOut.png';
import parameters from '../../assets/parametres.png';
// eslint-disable-next-line react/prop-types
const ProfilePopup = () => {

  const handleLogout = () =>{
    console.log("in logout");
    localStorage.removeItem('authToken');
  }
  
  
  
  return (
    <div className='profile-popup'>
      <div className='profile-popup-container'>
        <div className= 'profile-popup-items'>
          <div className='profile-popup-item' >
            <img src={profile} alt="" />
            <a href="/user/components/UserCart/UserCart"><span>Profile</span></a>
            
          </div>
          <div className='divider'></div> {/* Divider */}
          <div className='profile-popup-item'>
            <img src={parameters} alt="" />
            <a href="/user/accountsettings"><span>Settings</span></a>
            
          </div>
          <div className='divider'></div> {/* Divider */}
          <div className='profile-popup-item' onClick={handleLogout}>
            <img src={logout} alt="" />
            <span>Logout</span>
            
          </div>
        </div>
         
      </div>
    </div>
  )
}

export default ProfilePopup
