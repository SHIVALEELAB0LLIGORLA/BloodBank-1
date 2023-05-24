import React,{Component} from 'react';

import {Modal,Button,Row,Col,Form, FormGroup} from'react-bootstrap';
export class EditDonor extends Component{
    handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:60698/api/Donor',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                 DonorId:event.target.DonorId.value,
                Name:event.target.Name.value,
                Age:event.target.Age.value,
                Gender:event.target.Gender.value,
                Mobile:event.target.Mobile.value,
                BloodGroup:event.target.BloodGroup.value,
                Units:event.target.Units.value,
                DonationDate:event.target.DonationDate.value,
                Address:event.target.Address.value,
                
                
            })
        })
        .then(response=>response.json())
        .then((result)=>
        {
            alert(result)
        },(error)=>{
            alert('Failed')
        }
        )
    }

    render(){
         return(
         <Modal
         {...this.props}
         size="lg"
         aria-labelledby="contained-modal-title-vcenter"
         centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"> Edit Donor</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="App">
                     <Row>
                        <Col sm={6}>
                             <Form onSubmit={this.handleSubmit}>
                                 <Form.Group controlId="DonorId">
                                    <Form.Label>Donor ID</Form.Label>
                                    <Form.Control
                                     type="text"
                                     name="DonorId"
                                     required
                                     disabled
                                     defaultValue={this.props.DId}
                                     placeholder="Donor ID"/>
                                </Form.Group>
                                <Form.Group controlId="Name">
                                    <Form.Label> Name</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="Name"
                                     
                                     defaultValue={this.props.DName}
                                     placeholder="Name"/>
                                </Form.Group>
                                <Form.Group controlId="Age">
                                    <Form.Label>Age</Form.Label>
                                    <Form.Control
                                    type="integer"
                                    name="Age"
                                   
                                    defaultValue={this.props.DAge}
                                    placeholder="Age"/>
                                </Form.Group>
                                <Form.Group controlId="Gender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="Gender"
                                    
                                    defaultValue={this.props.DGen}
                                    placeholder="Gender"/>
                                </Form.Group>
                                <Form.Group controlId="Mobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="Mobile"
                                   
                                    defaultValue={this.props.DMobile}
                                    placeholder="Phone Number"/>
                                </Form.Group>
                                <Form.Group controlId="BloodGroup">
                                    <Form.Label>Blood Group</Form.Label>
                                    <Form.Control
                                    type="text"
                                     name="BloodGroup"
                                    
                                     defaultValue={this.props.DBG}
                                     placeholder="Blood Group"/>
                                </Form.Group>
                               
                                <Form.Group controlId="Units">
                                    <Form.Label>Units</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="Units"
                                    
                                    defaultValue={this.props.DUnits}
                                    placeholder="Units"/>
                                </Form.Group>
                                <Form.Group controlId="DonationDate">
                                    <Form.Label>DonationDate</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="DonationDate"
                                    disabled
                                    
                                    defaultValue={this.props.DDate}
                                    placeholder="Date"/>
                                </Form.Group>
                                <Form.Group controlId="Address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="Address"
                                   
                                    defaultValue={this.props.DAdd}
                                    placeholder="Address"/>
                                </Form.Group>
                               
                               
                                <FormGroup>
                                    <Button variant='primary' type='submit'>Update Details</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="danger"onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}
}
