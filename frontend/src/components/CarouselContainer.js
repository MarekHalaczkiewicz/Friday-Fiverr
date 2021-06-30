import React from 'react';
import { Carousel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

const containerImage = {
  width: '100%',
  height: '500px',
  zIndex: '1,',
};

const containerStyle = {
  display: 'block',
  textAlign: 'left',
  paddingBottom: '10%',
};

const CarouselContainer = (props) => {
  const history = useHistory();
  const handleClick = (e) => {
    e.preventDefault();
    history.push('/submit');
  };
  return (
    <Carousel fade>
      <Carousel.Item style={containerImage}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
          <Button variant="success" size="lg">
            Create Project
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={containerImage}>
        <img className="d-block w-100" src={image2} alt="Second slide" />

        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
          <Button variant="success" size="lg">
            Create Project
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={containerImage}>
        <img className="d-block w-100" src={image3} alt="Third slide" />

        <Carousel.Caption style={containerStyle}>
          <h3>Find your local community project</h3>
          <p>Join today and improve your local community</p>
          <Button variant="success" size="lg" onClick={(e) => handleClick(e)}>
            Create Project
          </Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselContainer;
