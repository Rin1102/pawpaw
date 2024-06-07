import React, { useState, useEffect } from 'react';
import './UserCart.css';
import firebase from '../../Firebase';

import profile from '../../assets/profile.png';
function UserCart() {

    const [name,setName]= useState('');
    const [phone,setPhone]= useState('');
    const email = localStorage.getItem("email");
    const database = firebase.database();

    const fetchUserData = async () => {
        try {
            const email = localStorage.getItem("email");

                const userSnapshot = await database.ref("users").orderByChild("email").equalTo(email).once("value");
                console.log("user snapshot",userSnapshot)
                const userData = userSnapshot.val();
                if (userData) {
                    const userValues = Object.values(userData)[0];
                    console.log("trah warini user values",userValues);
                    setName(userValues.name || "");
                    setPhone(userValues.phone || "");
                }
            
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='card'>
        <div className='upper-container'>
            <div className='image-container'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <img src={profile}alt="" height="200px" width="200px"style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
            </div>
            <div className='lower-container'>
                <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</h3>
                <br>
                </br><h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email:&nbsp;&nbsp;&nbsp;{email} </h4>
                <br></br>
                <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Phone:&nbsp;&nbsp;&nbsp;{phone}</h4>
            </div>
            
        </div>
      </div>
    </div>
    
  )
}

export default UserCart
