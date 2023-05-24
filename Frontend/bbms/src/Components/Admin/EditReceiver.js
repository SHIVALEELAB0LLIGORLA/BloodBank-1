import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form, FormGroup } from 'react-bootstrap';

export class EditReceiver extends Component {
  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:60698/api/Receiver', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
         ReceiverId: event.target.ReceiverId.value,
        Name: event.target.Name.value,
        Age: event.target.Age.value,
        Gender: event.target.Gender.value,
        Mobile: event.target.Mobile.value,
        BloodGroup: event.target.BloodGroup.value,
        Units: event.target.Units.value,
        HospitalName: event.target.HospitalName.value,
        Address: event.target.Address.value,
        Status: event.target.Status.value
      })
    })
      .then(response => response.json())
      .then((result) => {
        alert(result);
      }, (error) => {
        alert('Failed');
      });
  }

  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Edit Receiver</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="App">
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="ReceiverId">
                    <Form.Label>Receiver ID</Form.Label>
                    <Form.Control
                      type="text"
                      name="ReceiverId"
                      required
                      disabled
                      defaultValue={this.props.RId}
                      placeholder="Receiver ID"
                    />
                  </Form.Group> 
                  <Form.Group controlId="Name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                      disabled
                      defaultValue={this.props.RName}
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="Age">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="integer"
                      name="Age"
                      disabled
                      defaultValue={this.props.RAge}
                      placeholder="Age"
                    />
                  </Form.Group>
                  <Form.Group controlId="Gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control
                      type="text"
                      name="Gender"
                      disabled
                      defaultValue={this.props.RGen}
                      placeholder="Gender"
                    />
                  </Form.Group>
                  <Form.Group controlId="Mobile">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      name="Mobile"
                      
                      defaultValue={this.props.RMobile}
                      placeholder="Phone Number"
                    />
                  </Form.Group>
                  <Form.Group controlId="BloodGroup">
                    <Form.Label>Blood Group</Form.Label>
                    <Form.Control
                      type="text"
                      name="BloodGroup"
                      disabled
                      defaultValue={this.props.RBG}
                      placeholder="Blood Group"
                    />
                  </Form.Group>
                  <Form.Group controlId="Units">
                    <Form.Label>Units</Form.Label>
                    <Form.Control
                      type="text"
                      name="Units"
                      disabled
                      defaultValue={this.props.RUnits}
                      placeholder="Units"
                    />
                  </Form.Group>
                  <Form.Group controlId="HospitalName">
                    <Form.Label>Hospital Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="HospitalName"
                      disabled
                      defaultValue={this.props.RHospitalName}
                      placeholder="Hospital Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="Address">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="Address"
                      disabled
                      defaultValue={this.props.RAdd}
                      placeholder="Address"
                    />
                  </Form.Group>
                  <Form.Group controlId="Status">
                    <Form.Label>Status</Form.Label>
                    <Form.Control
                      type="text"
                      name="Status"
                      required
                      defaultValue={this.props.RStatus}
                      placeholder="Status"
                    />
                  </Form.Group>
                  <FormGroup>
                    <Button variant="primary" type="submit">Update Details</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
