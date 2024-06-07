// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './LoginPopup.css';
import firebase from '../../Firebase';
import cross_icon from '../../assets/cross_icon.png'
// eslint-disable-next-line react/prop-types
const LoginPopup = ({setShowLogin}) => {
  {/*currstate initiliser 3al login*/}
  const [currState,setCurrState] = useState("Login");
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const database = firebase.database();
  const handleSignUp = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
        localStorage.setItem('email', email);

        setShowLogin(false);

      }
      console.log('User signed up successfully');
      try {
        await database.ref("users").push({ // Corrected syntax to push data to database
            name: name,
            phone: "",
            email: email,
        });
        alert("Data saved successfully");
    } catch (error) {
        alert("Error: " + error.message);
    }
    } catch (error) {
      setError(error.message);
    }
  };
  
  const handleSignIn = async () => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = firebase.auth().currentUser;
      if (user) {
        const token = await user.getIdToken();
        localStorage.setItem('authToken', token);
        localStorage.setItem('email', email);

        setShowLogin(false);
      }
      console.log('User signed in successfully');
    } catch (error) {
      setError(error.message);
    }
  };
  
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)}src={cross_icon} alt="" /> {/*cross icon kif tenzel aleha tokhrej m login page*/}
        </div>
        {/* kan mawjoud f login tothhor input mta3 email o passwword snn +name */}
        <div className="login-popup-inputs">
          {currState==="Login"?<></>:<input type="text" onChange={(e) => setName(e.target.value)} placeholder='Your name' required/>}
          <input type="email" placeholder='Your email'
           value={email}
           onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder='Password'   value={password}
        onChange={(e) => setPassword(e.target.value)} required/>
        </div>
        {currState==="Sign Up"?<div></div>:<div className='forgot-password'>Lost Password? <span>Click Here!</span></div>}
        <button onClick ={currState==="Sign Up" ? handleSignUp : handleSignIn}>{currState==="Sign Up"?"Create account":"Login"}</button>
        {error && <p>{error}</p>}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privecy policy.</p>
        </div>
        {/* if f login show star 1 else star 2 */}
        {currState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p> 
        :<p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
      }
        
         
      </form>
    </div>
  )
}

export default LoginPopup
