import { assets } from '../../../assets/assets'
import './Footer.css'

const Footer=()=> {
  return (
    <div className='footer' id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logoname} alt="Logo" />
                <p className='para'> Adopt a pet in a simple and responsible way.</p>
                <div className="footer-social-icons">
                    <img  src={assets.facebook_icon} alt="Facebook"/>
                    <img  src={assets.linkedin_icon} alt="linkedin"/>
                    <img  src={assets.twitter_icon} alt="twitter"/>
                </div>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+216######</li>
                    <li>contact@pawpaw.com</li>
                </ul>

            </div>
            <div className="footer-content-center">
                <h2>Company</h2>
                <ul>
                <a href='#nav'>Home</a>
                    <li>About us</li>
                    <li>Privacy policy</li>
                    
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright"> Copyright 2024 © PawPaw.com -ALL right Reserved.</p>
    </div>
  )
}

export default Footer