import React, {useState} from 'react'
import './Signin.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import TreeDirectionSignin from '../ThreeD/TreeDirectionSignin'

import apple from './img/apple.png'
import google from './img/google.png'
import or from './img/or.png'


const Signin = () => {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className='signin-page'>
        <div>
        <Header />
        </div>
        <div className="signin">
          
          <div className="left">
            <div className="signin-banner">
              <div className="sigin-3d">
                <TreeDirectionSignin />
                <div className="signin-banner-text">
                  <h2>Join RON and Trade the Future</h2>
                  <p>Sign up now to access secure, fast, and intelligent crypto trading. Experience next-level innovation and seamless transactions with RON.</p>
                </div>
              </div>

            </div>
          </div>

          <div className="right">
            <div className="login">
              <h1>Log into your account</h1>
              <input type="email" name="email" placeholder='Email' />
              <input type="password" name="password" placeholder='Password' />
              <div className="login-button">
                <button type="submit">LOG IN</button>
                <p>By login you accept our term of use and policy.</p>
              </div>
              < div className="login-checkbox">
                <div className="remmember"><input type="checkbox" name="Remember" /><p>Remember me</p></div>
                <a href="#">Forget Your Password?</a>
              </div>
              <div className="login-with">
                <button><img src={apple} alt="apple" /><p>Login with Apple</p></button>
                <button><img src={google} alt="google" /><p>Login with google</p></button>
              </div>
            </div>

            <div className="or">
              <img src={or} alt="or" />
            </div>

            <div className="signup">
              <h1>Sign up</h1>
              <div className="signup-input">
                <input type="email" name="email"  placeholder='Email' />
                <input type="password" name="password"  placeholder='Password' />
                <input type="password" name="password"  placeholder='Repeat Password' />
              </div>
              
              <div className="terms">
                <div className='checkbox'>
                  <input 
                    type="checkbox" 
                    checked={isChecked} 
                    onChange={(e) => setIsChecked(e.target.checked)} 
                  />
                </div>
                <p>Accept our Terms of Use and Privacy Policy</p>
              </div>
              
              <div className='signup-button'>
                <button type="submit">SIGN UP</button>
              </div>
      
            </div>
          </div>
           
        </div>
        <div>
          <Footer />
        </div>
    </div>
  )
}

export default Signin
