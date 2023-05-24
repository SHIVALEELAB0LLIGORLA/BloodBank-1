import React, {useState,Fragment} from 'react' ;

import axios from 'axios';
import '../Styles/AddDonor.css';




function AddStock(){

   
    
    const [bloodGroup,setBloodGroup]=useState('');
    const [units,setUnits]=useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleDonorRegister=() =>{
     
    if (!bloodGroup) {
      setErrorMessage('Please provide Blood Group');
      return;
  }
  if (!units) {
    setErrorMessage('Please provide Units');
    return;
  }

        const data={
            
            BloodGroup:bloodGroup,
            Units:units,
           
       };
           const url='http://localhost:60698/api/stock';
           axios.post(url,data).then((result) =>{
              const Result=result.data;
              window.location.href = "/Stock";
               alert(Result);
               
           }).catch((error)=>
             {
                alert(error);
               })
}
return(
                     
    <Fragment>
        {/* <div className='Rimage' style={{ backgroundImage: `url(${backgroundImage})` }}> */}
      <div className="donate-container" >
      <h2 className='dh2'>Update Stock</h2>
      {errorMessage && <p className="derror-message">{errorMessage}</p>}
     
       
          <div className="dform-group">
          <label className='dlabel'>BloodGroup: &nbsp; </label>
          <select className='dinput' name="Blood Group" id="bloodGroup" required onChange={(e) => setBloodGroup(e.target.value)}>
                        <option disabled>--Select--</option>
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
          <input className='dinput' type="units" value={units}  onChange={(e) => setUnits(e.target.value)} />
          </div>

<button className='dbutton' onClick={()=> handleDonorRegister()}>Add Stock</button>

</div>

</Fragment>

);

}

export default AddStock;

     