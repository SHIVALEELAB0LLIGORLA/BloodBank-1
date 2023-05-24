import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

export class Stock extends Component{
    constructor(props){
        super(props);
        this.state={deps:[], addModalShow :false}
    }
    componentDidMount(){
        this.refreshList();
    }
    refreshList(){
        fetch('http://localhost:60698/api/Stock')
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
             <h1>Stock Details</h1>
            <Table className="mt-3" striped bordered hover size="sm">
               
                <thead>
                    <tr>
                        <th>StockId</th>
                        
                        <th>BloodGroup</th>
                        <th>Units</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {deps.map(dep=>
                    <tr key ={dep.StockId}>
                        <td >{dep.StockId}</td>
                        
                        <td >{dep.BloodGroup}</td>
                        <td>{dep.Units}</td>
                        
                    </tr>
                    )}
                </tbody>
            </Table>
        </div>
       );
   }
}
