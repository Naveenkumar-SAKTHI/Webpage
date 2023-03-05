import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Logo from './image/crypto.png';
import Logo1 from './image/logp.jpg';
import Bitcoin from "./image/bitcoin.jpg"

import {
  Button,
  
  Col,
  Nav,
   Navbar,
    Row}
     from 'react-bootstrap';  
function App() {  
  return ( 
    
    <div>
    <Row>
      <Col>
    <Navbar id="navbar-top" expand="lg" className="fixed-top">     
      <Navbar.Brand href="#home">
        <img src={Logo1} alt="logo" width="50"
              height="50" className="d-inline-block align-top"/>
      </Navbar.Brand>
      <Navbar.Toggle  aria-controls="basic-navbar-nav" />  
      <Navbar.Collapse bg="warning" id="basic-navbar-nav">  
        <Nav className="me-auto">  
          <Nav.Link href="#home" id='Navbarlinks'>Home</Nav.Link>  
          <Nav.Link href="#link" id='Navbarlinks'>Project</Nav.Link>  
           <Nav.Link href="#home" id='Navbarlinks'>Company</Nav.Link>  
          <Nav.Link href="#link" id='Navbarlinks'>Blog</Nav.Link>   
        </Nav>  
      </Navbar.Collapse> 
  </Navbar> 
  </Col>
  </Row>
  
    <Row id='text'>
      <Col lg={"6"} >
      <Row>
        <Col lg="12" id='text-1' md={{offset:2}} >
      <h2 id='txt'>A trusted and secure cryptocurrency exchange.</h2>
      </Col>
        <Col lg={"12"} md={{offset:2}}>
        <Button id="button-1" type='submit'
        className='btn btn-outline-dark'><h6>Get Started Now</h6></Button>
        </Col>
      </Row>
      </Col>

      <Col lg="6">
      <img id="img-2"src={Bitcoin} alt="Crpto" width="90%"/>
      </Col>
    </Row>



    </div>
  );  
}  
export default App;  