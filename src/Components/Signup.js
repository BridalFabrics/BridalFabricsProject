import React, {useState} from 'react'
import elipse from '../images/elipse.png'
import google from '../images/google.png'

import '../signup.css'

export default function Signup(props) {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    /* For Passowrd Field */
    const handleTogglePassword = () => {
        setPasswordVisible(!passwordVisible);
        document.getElementById('show-password').style.display = 'none';
        document.getElementById('hide-password').style.display = 'block';
    };

    const enableShowpassword = () => {
        setPasswordVisible(!passwordVisible);
        document.getElementById('show-password').style.display = 'block';
        document.getElementById('hide-password').style.display = 'none';
    }
    
    /* For Confirm Password Field */
    const handleToggleConfirmPassword = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
        document.getElementById('show-confirm-password').style.display = 'none';
        document.getElementById('hide-confirm-password').style.display = 'block';
    };

    const enableShowConfirmPassword = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
        document.getElementById('show-confirm-password').style.display = 'block';
        document.getElementById('hide-confirm-password').style.display = 'none';
    }

  return (
    <div className='container signup-container'>
      {/* Background Image only visible when screen is mobile or tablet */}
      <img className='back' src={elipse} alt="Support" />

      {/* First Row that Contain Logo, BrandName and Text */}
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <img src={props.logo} alt="Logo" className="signup-logo" />
          <h3 className='signup-brandName'>{props.brandName}</h3>
          <p className='signup-text'>Elevate Your Style, Embrace the<br />Power of a Perfect Suit!</p>
          <p className='signup'><span>Signup</span> your account</p>
        </div>
      </div>

      {/* 2nd Row */}
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
            <input className='text-input-forName' type="text" name="fname" id="fname" placeholder='First Name'/>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <input className='text-input-forName ln' type="text" name="lname" id="lname" placeholder='Last Name'/>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
            <input className='text-input em' type="email" name="signup-email" id="signup-email" placeholder='Email Address'/><br />
            <input className='text-input' type={passwordVisible ? 'text' : 'password'} name="signup-password" id="signup-password" placeholder='Password'/><br />
            {/* Eye icons for Psssword Vusibility */}
            <i className="fa fa-eye eye-toggle" id='show-password' onClick={handleTogglePassword}></i>
            <i className="fa fa-eye-slash eye-hide" id='hide-password' onClick={enableShowpassword}></i>

            <input className='text-input cp' type={confirmPasswordVisible ? 'text' : 'password'} name="signup-cpassword" id="signup-cpassword" placeholder='Confirm Password'/><br />
            {/* Eye icons for Confirm Psssword Vusibility */}
            <i className="fa fa-eye eye-toggle ch" id='show-confirm-password' onClick={handleToggleConfirmPassword}></i>
            <i className="fa fa-eye-slash eye-hide ceh" id='hide-confirm-password' onClick={enableShowConfirmPassword}></i><br />

            {/* SignUp Button */}
            <input className='text-input signup-btn' type="submit" value="SignUp"></input><br />
            <p className='additional'>Already have an account? <span>Login Account</span></p>
            {/* Google Icon */}
            <img className='google' src={google} alt="Google" />
        </div>
      </div>
    </div>
  )
}
