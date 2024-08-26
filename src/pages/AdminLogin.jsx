import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import biyidp from "../images/biyid.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function AdminLogin() {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

  const handleFormSubmit = (event) => {
    event.preventDefault();
    navigate('/Portfoliopage'); 
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Toggle the password visibility
  };

  return (
    <div>
      <h1 className="pass-subheading">
        Login
      </h1>
      <form onSubmit={handleFormSubmit} className="admin_login_form">
        <figure>
          <img src={biyidp} alt="Admin" />
        </figure>
        <input type="text" placeholder='Enter Username' />
        <div className="pass-space">
          <input 
            type={passwordVisible ? "text" : "password"} // Toggle input type
            placeholder='Enter Password' 
          />
          <FontAwesomeIcon 
            icon={passwordVisible ? faEye : faEyeSlash} // Toggle icon
            onClick={togglePasswordVisibility} 
            style={{ cursor: 'pointer' }} // Add cursor style for better UX
          />
        </div>
        <button type="submit">Access</button>
      </form>
    </div>
  );
}
