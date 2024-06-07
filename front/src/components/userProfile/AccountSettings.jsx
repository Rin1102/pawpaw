import { useState, useEffect } from 'react';
import firebase from '../../Firebase';
import './AccountSettings.css';

const AccountSettings = () => {
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const database = firebase.database();
    const email = localStorage.getItem("email");
  


 

    const fetchUserData = async () => {
        try {
            const email = localStorage.getItem("email");

                const userSnapshot = await database.ref("users").orderByChild("email").equalTo(email).once("value");
                console.log("user snapshot",userSnapshot)
                const userData = userSnapshot.val();
                if (userData) {
                    const userValues = Object.values(userData)[0];
                    console.log("trah warini user values",userValues);
                    setInputValue1(userValues.name || "");
                    setInputValue2(userValues.phone || "");
                }
            
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const saveData = async () => {
        try {
            const email = localStorage.getItem("email");

          
            
            const userSnapshot = await database.ref("users").orderByChild("email").equalTo(email).once("value");
            const userId = Object.keys(userSnapshot.val())[0];

            await database.ref(`users/${userId}`).update({
                name: inputValue1,
                phone: inputValue2,
            });
            alert("Data saved successfully");
        } catch (error) {
            alert("Error: " + error.message);
        }
    };

    return (
        <div className="accountsettings">
            <h1 className="mainhead1">Personal information</h1>
            <div className="form">
                <div className="form-group">
                    <label htmlFor="name">Your Name <span>*</span></label>
                    <input type="text" name="name" id="name" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone/mobile<span>*</span></label>
                    <input type="text" name="phone" id="phone" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={email} disabled />
                </div>
            </div>
            <button className='mainbutton1' onClick={saveData}>Save Changes</button>
        </div>
    );
}

export default AccountSettings;
