import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { images } from './images';


const Header = () => {
    return (
        <Carousel data-bs-theme="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.banner4}
            alt="First slide"
          />
          <Carousel.Caption>
            <p className='willie'>WELCOME TO WILLIES PHONES</p>
            <p className='sell'>We sell phones at affordable prices</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.banner1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.banner2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    );
}

export default Header;
