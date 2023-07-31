import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "../../styles/login.css";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [displayNameError, setDisplayNameError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!displayName) {
      setDisplayNameError(true);
    } else if (!email) {
      setEmailError(true);
    } else if (!password) {
      setPasswordError(true);
    } else {
      if (displayName) {
        setDisplayNameError(false);
      }
      if (email) {
        setEmailError(false);
      }
      if (password) {
        setPasswordError(false);
      }
      // Add your signup logic here, e.g., send data to the backend for signup
    }
  };

  return (
    <div className="signup-container">
      <h6 className="signup-heading">Login</h6>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="signup-label">
          <FontAwesomeIcon icon={faEnvelope} className="signup-icon" />
          <input
            className={`signup-input ${emailError ? 'signup-input-error' : ''}`}
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {emailError && <span className="signup-error">Please enter an email</span>}
        </label>
        <label className="signup-label">
          <FontAwesomeIcon icon={faLock} className="signup-icon" />
          <input
            className={`signup-input ${passwordError ? 'signup-input-error' : ''}`}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          {passwordError && <span className="signup-error">Please enter a password</span>}
        </label>
        <button className="signup-button">Login</button>
      </form>
      <div className="signup-social">
        <p style={{color:'white'}}>Or Login with</p>
        <ul className="signup-social-icons">
          <li className="signup-social-icon">
            {/* Add your Facebook icon here */}
            <span>Twitter</span>
          </li>
          <li className="signup-social-icon">
            {/* Add your Google icon here */}
            <span>Google</span>
          </li>
        </ul>
        <p className="signup-login-link">Create 150DSA Account? <NavLink to="/signup">SignUp</NavLink></p>
      </div>
    </div>
  );
}
