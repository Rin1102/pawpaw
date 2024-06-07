//import React, { useState } from 'react';
import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import UserSidebar from '../../components/userProfile/UserSidebar';
import AccountSettings from '../../components/userProfile/AccountSettings';
import './UserProfile.css';
import ChangePassword from '../../components/userProfile/ChangePassword';
const userProfile = () => {
    

    const {activepage} = useParams()
    //alert(activepage)
    return (
      <div className='userprofile'>
        <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSettings/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              
            </div>
        </div>
        </div>
    );
}

export default userProfile