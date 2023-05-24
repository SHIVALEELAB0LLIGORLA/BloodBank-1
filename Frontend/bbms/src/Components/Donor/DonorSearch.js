import React, { useState } from 'react';

import axios from 'axios';
import { Donorhistory } from './Donorhistory';
import './Donor.css';



function DonorSearch() {

const [donorId, setDonorId] = useState('');

const [personData, setPersonData] = useState([]);




const handleDonorIdChange = (e) => {

 setDonorId(e.target.value);
 };




 const handleSubmit = async (e) => {

 e.preventDefault();

 try {

const response = await axios.get(

`http://localhost:60698/api/DonorDetail/${donorId}`

 );

setPersonData(response.data);

 } catch (error) {

console.log(error);

 alert('Give Your Corresponding Id to display Details');

}

 };




 return (

<div>
 <form className='Searchform' onSubmit={handleSubmit}>

<label className='Searchlabel'>

 Enter Donor ID:
 <input className='Searchinput' type="text" value={donorId} onChange={handleDonorIdChange} />

 </label>

<button className='Searchbutton' type="submit">Search</button>

 </form>

 {personData.length > 0 ? (

 <table className='Searchtable'>

<thead className='Searchthead'>

 <tr className='Searchtr'>
 <th className='Searchth'>Name</th>

 <th className='Searchth'>Age</th>

<th className='Searchth'>Blood Group</th>

 <th className='Searchth'>Address</th>



 </tr>

</thead>

 <tbody className='Searchtbody'>

{personData.map((person) => (

<tr className='Searchtr' key={person.DonorId}>
               <td className='Searchtd'>{person.Name}</td>

 <td className='Searchtd'>{person.Age}</td>

<td className='Searchtd'>{person.BloodGroup}</td>

 <td className='Searchtd'>{person.Address}</td>


 </tr>
 ))}

 </tbody>
 </table>
 ) : (
    <div >
 <p className='Searchp'>Give your Id to display data</p>
      <Donorhistory/>
     </div>     
 )}

</div>

);

}




export default DonorSearch;