import React, {useState} from 'react'
import google from '../images/google.png'
import elipse from '../images/elipse.png'
import '../login.css'

export default function Login(props) {
  /* State that handle Password Visibility */
  const [passwordVisible, setPasswordVisible] = useState(false);

  /* Function that handle Show Password */
  const handleTogglePassword = () => {
    setPasswordVisible(!passwordVisible);
    document.getElementById('show-password').style.display = 'none';  
    document.getElementById('hide-password').style.display = 'block'; 
  };

  /* Function that handle Hide Password */
  const enableShowpassword = () => {
    setPasswordVisible(!passwordVisible);
    document.getElementById('show-password').style.display = 'block';  
    document.getElementById('hide-password').style.display = 'none';  
  }

  return (
    <div className='container login-container'>
      {/* Background Image only visible when screen is mobile or tablet */}
      <img className='back' src={elipse} alt="Support" />

      {/* First Row that Contain Logo, BrandName and Text */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <img src={props.logo} alt="Logo" className="logo" />
          <h3 className='brandName'>{props.brandName}</h3>
          <p className='text'>Elevate Your Style, Embrace the<br />Power of a Perfect Suit!</p>
          <p className='login'><span>Login</span> your account</p>
        </div>
      </div>
      
      {/* Second Row that contain Text-Inputs, Some Stuff and LOGIN Button along with Google icon*/}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <input className='text-input' type="email" name="login-email" id="login-email" required placeholder='Email Address'></input>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          <input className='text-input pass' type={passwordVisible ? 'text' : 'password'} name="login-password" id="login-password" required placeholder='Password'></input>

          {/* Eye icons for Psssword Vusibility */}
          <i className="fa fa-eye eye-toggle" id='show-password' onClick={handleTogglePassword}></i>
          <i class="fa fa-eye-slash eye-hide" id='hide-password' onClick={enableShowpassword}></i>
        </div>
        
        {/* Forget Password Text */}
        <div className="col-lg-12 col-md-12 col-sm-12">
          <p className='forget-text'>Forget Password?</p>

          {/* Login Button */}
          <input className='text-input submit-btn' type="submit" value="Login"></input>

          {/* Button to go to the Signup Page */}
          <p className='forget-text additional'>Don't have an account? <span>Create Account</span></p>

          {/* Google Icon */}
          <img className='google' src={google} alt="Google" />
        </div>
      </div>
      
    </div>
  )
}
