import React, { Component } from 'react';
import { ButtonToolbar, Table, Button } from 'react-bootstrap';
import { EditReceiver } from './EditReceiver';



export class DReceiver extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false, editModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:60698/api/Receiver')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ deps: data });
      });
  }

  componentDidUpdate() {
    this.refreshList();
  }

  render() {
    const {
      deps,
      RId, 
      RName,
      RAge,
      RGen,
      RMobile,
      RBG,
      RUnits,
      RHospitalName,
      RAdd,
      RStatus

    } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="donorhistory">
        <h1>Receiver Details</h1>
        <Table className="mt-3" striped bordered hover size="sm">
          <thead>
            <tr>
              <th>ReceiverId</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile</th>
              <th>BloodGroup</th>
              <th>Units</th>
              <th>HospitalName</th>
              <th>Address</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr key={dep.ReceiverId}>
                <td>{dep.ReceiverId}</td>
                <td>{dep.Name}</td>
                <td>{dep.Age}</td>
                <td>{dep.Gender}</td>
                <td>{dep.Mobile}</td>
                <td>{dep.BloodGroup}</td>
                <td>{dep.Units}</td>
                <td>{dep.HospitalName}</td>
                <td>{dep.Address}</td>
                <td>{dep.Status}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mt-4"
                      variants="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          RId:dep.ReceiverId,
                          RName: dep.Name,
                          RAge: dep.Age,
                          RGen: dep.Gender,
                          RMobile: dep.Mobile,
                          RBG: dep.BloodGroup,
                          RUnits: dep.Units,
                          RHospitalName: dep.HospitalName,
                          RAdd: dep.Address,
                          RStatus:dep.Status,
                        })
                      }
                    >
                      Edit
                    </Button>
                    <EditReceiver
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                      RId={RId}
                      RName={RName}
                      RAge={RAge}
                      RGen={RGen}
                      RMobile={RMobile}
                      RBG={RBG}
                      RUnits={RUnits}
                      RHospitalName={RHospitalName}
                      RAdd={RAdd}
                      RStatus={RStatus}

                    />
                  </ButtonToolbar>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
