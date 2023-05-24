
import React, {useState,Fragment} from 'react' ;

import axios from 'axios';
import '../Styles/AddDonor.css';
import backgroundImage from '../Styles/Donate2.png';


function Donate(){

    const [username,setName]=useState('');
    
    const [age,setAge]=useState('');
    const [gender,setGender]=useState('');
   
    const [mobile,setMobile]=useState('');
    const [bloodGroup,setBloodGroup]=useState('');
    const [units,setUnits]=useState('');
    const [date,setDonationDate]=useState('');

    const [address,setAddress]=useState('');  
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
    if (!bloodGroup) {
      setErrorMessage('Please provide Blood Group');
      return;
  }
  if (!units) {
    setErrorMessage('Please provide Units');
    return;
}
if (!date) {
  setErrorMessage('Please provide Donation Date');
  return;
}
    if (!address) {
      setErrorMessage('Please provide your Address');
      return;
  }
   
        const data={
            Name:username,
            Age:age,
            Gender:gender,
            Mobile:mobile,
            BloodGroup:bloodGroup,
            Units:units,
            DonationDate:date,
            Address:address,
            
       };
           const url='http://localhost:60698/api/DonorDetail';
           axios.post(url,data).then((result) =>{
              const Result=result.data;
              window.location.href = "/Donor";
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
      <h2 className='dh2'>Make a Donation</h2>
     
     
        <div className="dform-group">
          <label className='dlabel'>Name:</label>
          <input className='dinput' type="text" value={username} onChange={(e) => setName(e.target.value)} />
        </div>
        
       
          <div className="dform-group">
          <label className='dlabel'>Age:</label>
          <input className='dinput' type="age" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>Gender: &nbsp;</label>
         
          <select className='dinput' name="Gender" id="gender" onChange={(e) => setGender(e.target.value)}>
                        <option>--Select Gender--</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
          </select>
          </div>
          
       
        <div className="dform-group">
          <label className='dlabel'>Mobile:</label>
          <input className='dinput' type="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>BloodGroup: &nbsp;</label>
         
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
          <label className='dlabel'>Units:</label>
          <input className='dinput' type="units" value={units} onChange={(e) => setUnits(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>DonationDate:</label>
          <input className='dinput' type="date" value={date} onChange={(e) => setDonationDate(e.target.value)} />
          </div>
          <div className="dform-group">
          <label className='dlabel'>Address:</label>
          <input className='dinput' type="address" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          {errorMessage && <p className="derror-message">{errorMessage}</p>}
       
<button className='dbutton' onClick={()=> handleDonorRegister()}>Donate</button>

</div>
</div>
</Fragment>

);

}

export default Donate;

     