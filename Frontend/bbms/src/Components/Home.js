import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './LandingPage.css';
import Home from './Styles/Home.jpg';

function LandingPage() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container>
          <Navbar.Brand href="/">BLOOD BANK MANAGEMENT SYSTEM</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/DonorLogin">Donor</Nav.Link>
            <Nav.Link href="/ReceiverLogin">Receiver</Nav.Link>
            <Nav.Link href="/Admin">Admin</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      <div className='color'>
      <h1 className='hh1'>WELCOME TO THE BLOOD BANK MANAGEMENT SYSTEM</h1>
      <table className='landing-page'>    
        <tbody>
           
          <tr>
            <td className='htd'>
              <div className="hcontent">
              
                <h2 className='hh2'>Your Droplets of Blood May Create an Ocean of Happiness</h2>
                <h4 className='hh4'>Be the reason for someone's heartbeat.</h4>
              </div>
            </td>
            <td>
              <img src={Home} alt="Image" />
            </td>
          </tr>
        </tbody>
      </table>
      <footer className="footer">
        <p>&copy; 2023 Blood Bank Management System. All rights reserved.</p>
        <Container>
          <Nav className="footer-nav">
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#endregionterms">Terms</Nav.Link>
            <Nav.Link href="#privacy">Privacy</Nav.Link>
            <Nav.Link href="#help">Help</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
        </Container>
      </footer>
      </div>
    </>
  );
}

export default LandingPage;








     
