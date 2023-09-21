import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { images } from './images';

const Footer = () => {
    return (
        
      <footer className='ending'>
        <Row>

          <Col md='3'>
            <div className='footer'>
              <center><img src={images.iph} alt='#'></img></center>

              {/* socials images */}
              <div className='footlogo'>
                 <img src={images.Twitter} alt='djasfk' />
                 <img src='' alt='djasfk' />
                 <img src='' alt='djasfk' />
              </div>
            </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
            <h3>HELP</h3>
          <p>Privicy Policy</p>
          <p>Refund Policy</p>
          </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
          <h3>STORE</h3>
          <p>Men Fashion</p>
          <p>Women Fashion</p>
          <p>Store Sale</p>
          <p>Collection</p>
          </div>
          </Col>
          <Col md='3'>
          <div className='footer'>
          <h3>SUPPORT</h3>
          <p>Feedback</p>
          <p>Contact Us</p>
          <p>Customer Service</p>
          <p>Terms & Conditions</p>
          </div>
          </Col>
        </Row>
      </footer>
      
    
    );
}

export default Footer;
