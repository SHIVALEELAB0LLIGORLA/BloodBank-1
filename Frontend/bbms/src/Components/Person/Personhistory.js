import React,{Component} from 'react';
import {Table} from 'react-bootstrap';


export class Personhistory extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow :false}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch('http://localhost:60698/api/Person')
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
             
             <h1>Person Details</h1>
            <Table className="mt-3" striped bordered hover size="sm">
               
                <thead>
                    <tr>
                        <th>PersonId</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>PhoneNo</th>
                        <th>BloodGroup</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                    <tr key ={dep.PersonId}>
                        <td >{dep.PersonId}</td>
                        <td >{dep.Name}</td>
                        <td >{dep.Age}</td>
                        <td >{dep.Gender}</td>
                        <td >{dep.PhoneNo}</td>
                        <td >{dep.BloodGroup}</td>
                        <td>{dep.Address}</td>
                        <td>{dep.Email}</td>
                        <td>{dep.Type}</td>
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
       );
   }
}
