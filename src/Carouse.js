import React from 'react'
import { Carousel } from 'react-bootstrap'
import "./Carouse.css";

const Carouse = () => {
  return (
    <div>
          <Carousel>
      <Carousel.Item>
        <div id="caro-div">
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div id="caro-div">
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div id="caro-div">
      <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Carouse
