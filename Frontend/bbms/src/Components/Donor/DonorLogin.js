import React,{Fragment,useState} from 'react';

import axios from 'axios';
import '../Styles/Login.css';
import login from '../Donor/login.jpg';


import { useNavigate } from 'react-router-dom';
function DonorLogin(){
    const [username,setName]=useState('');
    const [password,setPassword]=useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleNameChange=(value) => {setName(value);};
    const handlePasswordChange=(value) => {setPassword(value);};
    const handleToggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
      };
    const handleLogin=() =>{
        if (!username) {
            setErrorMessage('Please provide username');
            return;
         }
         if (!password) {
            setErrorMessage('Please provide a password');
            return;
        }
        else if (!/[\W_]/.test(password) || password.length <=6) {
            setErrorMessage('Password must contain a special character and be greater than 6 characters long');
            return;
        }
        const data={ 
            Name:username,
            Password:password,
        };
        const url='http://localhost:60698/api/Donor/Login';
        axios.post(url,data).then((result) =>{
            const loginResult = result.data;
            alert(loginResult);
            navigate(loginResult === "Login successful!" ? "/Donor" : "/DonorLogin");
        }).catch((error)=>
        {
            alert(error); 
        })
    }
    return(
    <Fragment>
        <div className='receiverlogin'>
            <h2 className='lh2'>Login to Donate</h2>
            <div className="imgcontainer">
            <img src={login} alt="Avatar" className="avatar" />
           </div>
            <label className='llabel'>UserName</label>
            <input className='linput' type="text" 
            id="txtusername" 
            placeholder='Enter UserName' 
            required onChange={(e) =>handleNameChange(e.target.value)} /> 
            <br></br>
            <label className='llabel'>Password</label>
        <div className='password-input'>
          <input
            className='linput'
            type={showPassword ? 'text' : 'password'}
            id='Password'
            placeholder='Enter Password'
            required
            onChange={(e) => handlePasswordChange(e.target.value)}
          />
          <span
            className={`toggle-password ${showPassword ? 'show ' : ''}`}
            onClick={handleToggleShowPassword}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </span>
        </div>
            
            {errorMessage && <p className='lerror'>{errorMessage}</p>}
            <div className="r_login">
                <button className='lbutton' onClick={()=> handleLogin()}>Login</button>
            </div>
            
            <p>New User <a href='DonorRegistration'>SignUp</a></p>
        </div>
    </Fragment>
    )
}
export default DonorLogin;
