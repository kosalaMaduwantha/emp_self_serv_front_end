import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

function BasicExample() {
  return (
    <>
    <Navbar 
      variant="dark" 
      bg="dark" 
      expand="lg"
      style={{
        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.2)', 
      }}>
      <Container>
        <Navbar.Brand href="#home">Company Name</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav 
            className="me-auto"
            style={{
              marginLeft:'70px'
            }}>
            <Nav.Link href="/" >Home</Nav.Link>
            <Nav.Link href="/employeeDetails">Details</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    <Outlet/>
    </>
  );
}

export default BasicExample;