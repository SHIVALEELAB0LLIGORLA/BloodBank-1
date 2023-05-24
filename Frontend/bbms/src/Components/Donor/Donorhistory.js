import React,{Component} from 'react';
import {Table} from 'react-bootstrap';
import './Donor.css';
export class Donorhistory extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow :false}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch('http://localhost:60698/api/Donor')
        .then(response=> response.json())
        .then(data => {
            this.setState({deps:data});
        }
        );
    }
   
    render()
    {
        const{deps} = this.state;
        
        return(
        <div className='donorhistory'>
             <h1>Donor Details</h1>
            <Table className="mt-3" striped bordered hover size="sm">
               
                <thead>
                    <tr>
                        <th>DonorId</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Mobile</th>
                        <th>BloodGroup</th>
                        <th>Units</th>
                        <th>DonationDate</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                    <tr key ={dep.DonorId}>
                        <td >{dep.DonorId}</td>
                        <td >{dep.Name}</td>
                        <td >{dep.Age}</td>
                        <td >{dep.Gender}</td>
                        <td >{dep.Mobile}</td>
                        <td >{dep.BloodGroup}</td>
                        <td>{dep.Units}</td>
                        <td>{dep.DonationDate}</td>
                        <td>{dep.Address}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
       );
   }
}
