import React, { Component } from 'react';
import { ButtonToolbar, Table, Button } from 'react-bootstrap';
import { EditDonor } from './EditDonor';

export class DDonor extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [], addModalShow: false, editModalShow: false };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList() {
    fetch('http://localhost:60698/api/Donor')
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
      DId, 
      DName,
      DAge,
      DGen,
      DMobile,
      DBG,
      DUnits,
      DDate,
      DAdd,
    } = this.state;
    let editModalClose = () => this.setState({ editModalShow: false });
    return (
      <div className="donorhistory">
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {deps.map((dep) => (
              <tr key={dep.DonorId}>
                <td>{dep.DonorId}</td>
                <td>{dep.Name}</td>
                <td>{dep.Age}</td>
                <td>{dep.Gender}</td>
                <td>{dep.Mobile}</td>
                <td>{dep.BloodGroup}</td>
                <td>{dep.Units}</td>
                <td>{dep.DonationDate}</td>
                <td>{dep.Address}</td>
                <td>
                  <ButtonToolbar>
                    <Button
                      className="mt-4"
                      variants="info"
                      onClick={() =>
                        this.setState({
                          editModalShow: true,
                          DId:dep.DonorId,
                          DName: dep.Name,
                          DAge: dep.Age,
                          DGen: dep.Gender,
                          DMobile: dep.Mobile,
                          DBG: dep.BloodGroup,
                          DUnits: dep.Units,
                          DDate: dep.DonationDate,
                          DAdd: dep.Address,
                        })
                      }
                    >
                      Edit
                    </Button>
                    <EditDonor
                      show={this.state.editModalShow}
                      onHide={editModalClose}
                       DId={DId}
                      DName={DName}
                      DAge={DAge}
                      DGen={DGen}
                      DMobile={DMobile}
                      DBG={DBG}
                      DUnits={DUnits}
                      DDate={DDate}
                      DAdd={DAdd}
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
