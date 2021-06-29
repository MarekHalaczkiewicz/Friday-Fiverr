import React from "react";
import { Carousel } from "react-bootstrap";

import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";

const containerStyle = {
  display: "block",
  textAlign: "left",
  paddingBottom: "15%",
};

const containerImage = {
  width: "100%",
  height: "75%",
  objectFit: "cover",
};

const CarouselContainer = () => {
  return (
    <Carousel fade>
      <Carousel.Item style={containerImage}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
