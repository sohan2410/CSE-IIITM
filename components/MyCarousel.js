import React from "react"
import Carousel from "react-bootstrap/Carousel";
import { Container } from "@mui/material";

const MyCarousel = () => {
  return (
    <Container sx={{
      height: '280px',
      padding: '20px 0px 20px 0px'
    }}>
      <Carousel style={{ margin: 'auto' }}>
        <Carousel.Item>
          <img className="d-block w-100" src="/static/images/carousel1.jpg" alt="First slide" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3> */}
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/static/images/carousel2.jpg" alt="Second slide" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default MyCarousel
