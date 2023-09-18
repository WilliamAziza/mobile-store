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
            <p className='willie'>WELCOME TO WILLIES STORES</p>
            <p className='sell'>We sell products at affordable prices</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.top1}
            alt="Second slide"
            height='500px'
          />
          <Carousel.Caption>
            <h5 className='discount'>GET A DISCOUNT <span className='willie'> OF 10% OF PURCHASE</span></h5>
            <p className='shirts'>Get all you shirts at Willies Store</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.jacket}
            alt="Third slide"
            
          />
          <Carousel.Caption>
            <h5 className='willie'>EXPLORE MORE OF OUR PRODUCTS</h5>
            <p className='shirts'>
              Your number one best online shopping site
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        
    );
}

export default Header;
