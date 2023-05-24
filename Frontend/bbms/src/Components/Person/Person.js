
import React, {useState,Fragment} from 'react' ;

import axios from 'axios';
import '../Styles/AddDonor.css';
import backgroundImage from '../Styles/Donate2.png';



function Person(){

    const [username,setName]=useState('');
    
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
   
    const [phoneNo,setPhoneNo]=useState('');
    const [bloodGroup,setBloodGroup]=useState('');
    const [address,setAddress]=useState('');
    const [email,setEmail]=useState('');

    const [type,setType]=useState('');  
    const [errorMessage, setErrorMessage] = useState('');

   
    const handleDonorRegister=() =>{

      if (!username) {
        setErrorMessage('Please provide User Name');
        return;
    }
    if (!age) {
      setErrorMessage('Please provide Age');
      return;
  }
  if (!gender) {
    setErrorMessage('Please provide Gender');
    return;
}
if (!phoneNo) {
  setErrorMessage('Please enter your Mobile number');
  return;
}
if (phoneNo) {
  
  var pattern = new RegExp(/^[0-9\b]+$/);
  if (!pattern.test(phoneNo)) {
    setErrorMessage("Please enter only number.");
    return;
  }
  else if(phoneNo.length != 10){
   setErrorMessage("Please enter valid phone number.");
   return;
  }
}

    if (!bloodGroup) {
      setErrorMessage('Please provide Blood Group');
      return;
  }
  if (!address) {
    setErrorMessage('Please provide your Address');
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
if (!type) {
  setErrorMessage('Please Select your Type');
  return;
}
 

   
        const data={
            Name:username,
            Age:age,
            Gender:gender,
            PhoneNo:phoneNo,
            BloodGroup:bloodGroup,
            Address:address,
            Email:email,
            Type:type
            
       };
           const url='http://localhost:60698/api/PersonDetail';
           axios.post(url,data).then((result) =>{
              const Result=result.data;
              window.location.href = "/Dashboard";
               alert(Result);
               
           }).catch((error)=>
             {
                alert(error);
               })
}
return(
                     
    <Fragment>
        <div className='image' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="donate-container" >
      <h2 className='dh2'>Person Details</h2>
     
     
        <div className="dform-group">
          <label className='dlabel'>Name:</label>
          <input className='dinput' type="text" value={username} onChange={(e) => setName(e.target.value)} />
        </div>
        
       
          <div className="dform-group">
          <label className='dlabel'>Age:</label>
          <input className='dinput' type="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>Gender:</label>
          {/* <input className='dinput' type="gender" value={gender} onChange={(e) => setGender(e.target.value)} /> */}
          <select className='dinput' name="Gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                        <option>--Select Gender--</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
          </select>
          </div>
          
       
        <div className="dform-group">
          <label className='dlabel'>PhoneNo:</label>
          <input className='dinput' type="phoneNo" value={phoneNo} onChange={(e) => setPhoneNo(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>BloodGroup:</label>
          {/* <input className='dinput' type="bloodGroup" value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)} /> */}
          <select className='dinput' name="Blood Group" id="bloodGroup" onChange={(e) => setBloodGroup(e.target.value)}>
                        <option>--Select--</option>
                        <option value="A Positive">A+</option>
                        <option value="B Positive">B+</option>
                        <option value="O Positive">O+</option>
                        <option value="AB Positive">AB+</option>
                        <option value="A Negative">A-</option>
                        <option value="B Negative">B-</option>
                        <option value="O Negative">O-</option>
                        <option value="ABNegative">AB-</option>
                    </select>
          </div>
          <div className="dform-group">
          <label className='dlabel'>Address</label>
          <input className='dinput' type="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>Email:</label>
          <input className='dinput' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>Type:</label>
          {/* <input className='dinput' type="type" value={type} onChange={(e) => setType(e.target.value)} /> */}
          <select className='dinput' name="Type" id="type" onChange={(e) => setType(e.target.value)}>
                        <option>--Select Type--</option>
                        <option value="Receiver">Receiver</option>
                        <option value="Donor">Donor</option>
          </select>
          </div>
        
          {errorMessage && <p className="derror-message">{errorMessage}</p>}
<button className='dbutton' onClick={()=> handleDonorRegister()}>Add Details</button>

</div>
</div>
</Fragment>

);

}

export default Person;

     