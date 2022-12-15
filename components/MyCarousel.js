import React from "react"
import Carousel from "react-bootstrap/Carousel"
import { Container, CardMedia } from "@mui/material"
import Image from "next/image"
const MyCarousel = () => {
  return (
    <Container sx={{ padding: "16px 0px 0px 0px" }}>
      <Carousel style={{ margin: "auto" }}>
        <Carousel.Item>
          <CardMedia component="img" image="/static/images/carousel1.jpg" alt="First slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <CardMedia component="img" image="/static/images/carousel2.jpg" alt="Second slide" />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  )
}

export default MyCarousel
