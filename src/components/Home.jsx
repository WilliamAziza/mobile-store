import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Col } from 'react-bootstrap';
import { images } from './images';

const Home = () => {
    return (
        <div>
            <Header />
            <p className='products'>Get all your Products Here</p>
            <div className='center-button'>
                <Link to='/product-list' >
                    <button className='browse'>Browse Products</button>
                </Link>
            </div>

            <p className='arrival'>New Arrival</p>
            <Container>
                <Col md="4" style={{ margin: '1rem' }}>
                    <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.iphone11} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>iPhone 11</Card.Title>
                            <Card.Text>
                              GHC 5,000
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                    <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.iphone12} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>iPhone 12</Card.Title>
                            <Card.Text>
                                GHC 7,000
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                    <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.iphone15} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>iPhone 13</Card.Title>
                            <Card.Text>
                                GHC 10, 000
                            </Card.Text>
                            <Button variant="primary">Details</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
}

export default Home;
