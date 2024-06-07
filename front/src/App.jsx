{/*import firebase from 'firebase/app';
import 'firebase/database';*/}
import Nav from "./components/Nav/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Nav/Footer/Footer";
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';
import UserProfile from "./pages/user/UserProfile";
import UserCart from "./components/UserCart/UserCart";
import AdoptMe from "./pages/AdoptMe/AdoptMe";
import Contacts from "./pages/Contacts/Contacts";

import Forum from "./pages/Forum/Forum";
import DetailForum from "./pages/DetailForum/DetailForum";
{/**/} 

const App = () => {
  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    <Router>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
      <Nav setShowLogin={setShowLogin}/>
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adopt-me" element={<AdoptMe/>} />
          <Route path="/contacts" element={<Contacts/>} />
          <Route path="/user/:activepage" element={<UserProfile/>} />
          <Route path="/user/components/UserCart/UserCart" element={<UserCart/>} />
          <Route path="/forum" element={<Forum/>} />
          <Route path="/forum/:id/details" element={<DetailForum/>} />
        </Routes>
        
     
      
      
      <Footer />
      </div>
      </Router>
    </>
  )
};

export default App;
