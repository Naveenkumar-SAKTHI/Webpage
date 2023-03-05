import React from 'react'
import { Card, Col ,Row} from 'react-bootstrap'

const cards = () => {
  return (
    <div id="cards" >
      <Row>  
    <Col md={{span:3,offset:1}}>
      
    <Card style={{ height: '15rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
      <div id='card1-div'>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
        </div>
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  
  <Col lg={{span:3}} id="cards-2">
  <Card style={{ height: '15rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
  </Row>

  <Row>
  <Col lg={{span:3,offset:1}} id="cards-3">
  <Card style={{ height: '15rem' }}>
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </Col>
    
  </Row>
  
  </div>

  )
}

export default cards;
