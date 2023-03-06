import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
// import Logo from './image/crypto.png';
//import Logo1 from './image/logp.jpg';
import Bitcoin from "./image/bitcoin.jpg"
import navlogo from "./image/navlogo1.jpg"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import {
  
  Col,
  Nav,
   Navbar,
    Row}
     from 'react-bootstrap';  
function App() {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Row>
      <Col>
      


      <Offcanvas show={show} onHide={handleClose} responsive="lg">
        <Offcanvas.Header closeButton="btn-btn">
          <Offcanvas.Title>company logo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Navbar bg="" variant="dark">
        
          <Navbar.Brand>
          <img id="logo"src={navlogo} alt="Crpto" width="250" height="100"/>
          </Navbar.Brand>
      
      </Navbar>
          <Nav.Link href="#home" id='Navbarlinks'>Home</Nav.Link>  
          <Nav.Link href="#link" id='Navbarlinks'>Project</Nav.Link>  
           <Nav.Link href="#home" id='Navbarlinks'>Company</Nav.Link>  
          <Nav.Link href="#link" id='Navbarlinks'>Blog</Nav.Link> 
        </Offcanvas.Body>
      </Offcanvas>
      <Button variant="primary" className="d-lg-none" onClick={handleShow}>
        Launch
      </Button>

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