import React, { useState } from 'react';

import axios from 'axios';
import {Receiverhistory } from './Receiverhistory';
import '../Donor/Donor.css';



function ReceiverSearch() {

const [receiverId, setReceiverId] = useState('');

const [personData, setPersonData] = useState([]);




const handleReceiverIdChange = (e) => {

 setReceiverId(e.target.value);
 };




 const handleSubmit = async (e) => {

 e.preventDefault();

 try {

const response = await axios.get(

`http://localhost:60698/api/ReceiverDetail/${receiverId}`

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

 Enter Receiver ID:
 <input className='Searchinput' type="text" value={receiverId} onChange={handleReceiverIdChange} />

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

 <th className='Searchth'>Units</th>
 <th className='Searchth'>Status</th>



 </tr>

</thead>

 <tbody className='Searchtbody'>

{personData.map((person) => (

<tr className='Searchtr' key={person.DonorId}>
               <td className='Searchtd'>{person.Name}</td>

 <td className='Searchtd'>{person.Age}</td>

<td className='Searchtd'>{person.BloodGroup}</td>

 <td className='Searchtd'>{person.Units}</td>
 <td className='Searchtd'>{person.Status}</td>


 </tr>
 ))}

 </tbody>
 </table>
 ) : (
    <div >
 <p className='Searchp'>Give your Id to display data</p>
      <Receiverhistory/>
     </div>     
 )}

</div>

);

}




export default ReceiverSearch;