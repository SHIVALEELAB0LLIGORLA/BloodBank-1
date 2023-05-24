import React, { useState } from 'react';
import './Admin.css'

import { useNavigate } from 'react-router-dom';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      // Login successful, perform necessary actions
      window.location = "http://localhost:3000/Dashboard";
      setErrorMessage('');
    } else {
      // Login failed, display error message
      setErrorMessage('Invalid username or password');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <label className='llabel'>UserName</label>
            <input className='linput' type="text" 
            id="txtusername" 
            placeholder='Enter UserName' 
            onChange={handleUsernameChange}
        
      />
       <label className='llabel'>Password</label>
        <div className='password-input'>
          <input
            className='linput'
            type={showPassword ? 'text' : 'password'}
            id='Password'
            placeholder='Enter Password'
            required
            onChange={handlePasswordChange}
          />
          <span
            className={`toggle-password ${showPassword ? 'show ' : ''}`}
            onClick={handleToggleShowPassword}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </span>
        </div>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default AdminLogin;
