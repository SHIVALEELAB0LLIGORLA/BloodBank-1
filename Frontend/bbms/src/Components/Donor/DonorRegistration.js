import React,{Fragment, useState} from 'react';
import axios from 'axios';
import '../Styles/Registration.css';
function DonorRegistration()
{
    const [username,setName]=useState('');
    const [password,setPassword]=useState('');
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
    const [email,setEmail]=useState('');
    const [mobile,setMobile]=useState('');
    const [address,setAddress]=useState('');  
    const [errorMessage, setErrorMessage] = useState('');

    
    
     const handleDonorRegister=() =>{

        if (!username) {
            setErrorMessage('Please provide user name');
            return;
        }
        if (!password) {
          setErrorMessage('Please provide a password');
          return
      }
      else if (!/[\W_]/.test(password) || password.length <= 6) {
          setErrorMessage('Password must contain a special character and be greater than 6 characters long');
           return;
      }

        if (!email) {
          setErrorMessage('Please provide an email');
          return
        } 
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          setErrorMessage('Invalid Email');
             return;
        }
        if (!mobile) {
          setErrorMessage('Please enter your Mobile number');
          return;
      }
        if (mobile) {
          
          var pattern = new RegExp(/^[0-9\b]+$/);
          if (!pattern.test(mobile)) {
            setErrorMessage("Please enter only number.");
            return;
          }
          else if(mobile.length != 10){
           setErrorMessage("Please enter valid phone number.");
           return;
          }
        }
        if (!address) {
          setErrorMessage('Please provide your address');
          return;
      }
       

            const data={
                 Name:username,
                 Password:password,
                 Age:age,
                 Gender:gender,
                 Email:email,
                 Mobile:mobile,
                 Address:address,
                 
            };
                const url='http://localhost:60698/api/Donor/Registration';
                axios.post(url,data).then((result) =>{
                   const Result=result.data;
                   window.location.href = "/DonorLogin";
                    alert(Result);
                    
                }).catch((error)=>
                  {
                     alert(error);
                    })
    }
                    return(
                     
                        <Fragment>
                          <div className="registration-container">
                          <h2 className='rh2'>Donor Registration</h2>

                            <div className="rform-group">
                              <label className='rlabel'>Name:</label>
                              <input className='rinput' type="text" value={username} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="rform-group">
                              <label className='rlabel'>Password:</label>
                              <input className='rinput' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                           
                              <div className="rform-group">
                              <label className='rlabel'>Age:</label>
                              <input className='rinput' type="age" required value={age} onChange={(e) => setAge(e.target.value)} />
                              </div>
                              <div className="rform-group">
                              <label className='rlabel'>Gender:</label>
                             
                              <select className='rinput' name="Gender" id="gender" required onChange={(e) => setGender(e.target.value)}>
                              <option>--Select Gender--</option>
                              <option value="Female">Female</option>
                              <option value="Male">Male</option>
                         </select>
                              </div>
                              
                            <div className="rform-group">
                              <label className='rlabel'>Email:</label>
                              <input className='rinput' type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="rform-group">
                              <label className='rlabel'>Mobile:</label>
                              <input className='rinput' type="mobile" required value={mobile} onChange={(e) => setMobile(e.target.value)} />
                              </div>
                              <div className="rform-group">
                              <label className='rlabel'>Address:</label>
                              <input className='rinput' type="address" required value={address} onChange={(e) => setAddress(e.target.value)} />
                              </div>
                              {errorMessage && <p className="rerror-message">{errorMessage}</p>}
                           
          <button className='rbutton' onClick={()=> handleDonorRegister()}>Register</button>
          <br></br>
          <p>Already have an account <a href='/DonorLogin'>SignIn</a></p>
        
      </div>
      </Fragment>
                );
}
export default DonorRegistration;