import React, { useState } from 'react';
import firebase from '../../Firebase';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "oldpass") {
        setOldPassword(value);
    } else if (name === "newpass") {
        setNewPassword(value);
    } else if (name === "confirmpass") {
        setConfirmPassword(value);
    }
};

const savePassword = async () => {
    try {
        // Add your password change logic here, using Firebase Authentication
        // Example:
         const user = firebase.auth().currentUser;
         const credential = firebase.auth.EmailAuthProvider.credential(
           user.email,
             oldPassword
         );
         await user.reauthenticateWithCredential(credential);
         await user.updatePassword(newPassword);
         alert("Password changed successfully");

        // For this example, just logging the values
        console.log("Old Password:", oldPassword);
        console.log("New Password:", newPassword);
        console.log("Confirm Password:", confirmPassword);
    } catch (error) {
        console.error("Error changing password:", error);
        alert("Error changing password: " + error.message);
    }
};








return (
  <div className='accountsettings'>
      <h1 className='mainhead1'>Change Password</h1>
      <div className='form'>
          <div className='form-group'>
              <label htmlFor='oldpass'>Old Password <span>*</span></label>
              <input
                  type="password"
                  name="oldpass"
                  id="oldpass"
                  value={oldPassword}
                  onChange={handleChange}
              />
          </div>
          <div className='form-group'>
              <label htmlFor='newpass'>New Password <span>*</span></label>
              <input
                  type="password"
                  name="newpass"
                  id="newpass"
                  value={newPassword}
                  onChange={handleChange}
              />
          </div>
          <div className='form-group'>
              <label htmlFor='confirmpass'>Confirm New Password <span>*</span></label>
              <input
                  type="password"
                  name="confirmpass"
                  id="confirmpass"
                  value={confirmPassword}
                  onChange={handleChange}
              />
          </div>
      </div>
      <button className='mainbutton1' onClick={savePassword}>Save Changes</button>
  </div>
);
};



export default ChangePassword
