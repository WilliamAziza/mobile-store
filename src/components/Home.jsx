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
                            <Card.Text>GHC 2,000</Card.Text>
                            <Link to="/product-details/iphone11">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.jacket} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>Polo Jacket</Card.Title>
                            <Card.Text>GHC 60</Card.Text>
                            <Link to="/product-details/jacket">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.heels} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>All Saint Heels</Card.Title>
                            <Card.Text>GHC 200</Card.Text>
                            <Link to="/product-details/heels">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>

            </Container>
            <Container>
            <Col md="4" style={{ margin: '1rem' }}>
                <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.blackT} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>Plain Black T- Shirt</Card.Title>
                            <Card.Text>GHC 40</Card.Text>
                            <Link to="/product-details/blackT">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.hoodie} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>Red Hoodie</Card.Title>
                            <Card.Text>GHC 120</Card.Text>
                            <Link to="/product-details/hoodie">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md="4" style={{ margin: '1rem' }}>
                <Card>
                        <div style={{ height: '200px', overflow: 'hidden' }}>
                            <Card.Img variant="top" src={images.airmax} style={{ height: '100%' }} />
                        </div>
                        <Card.Body>
                            <Card.Title>Nike Airmax</Card.Title>
                            <Card.Text>GHC 220</Card.Text>
                            <Link to="/product-details/airmax">
                                <Button variant="primary">Details</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Container>
        </div>
    );
}

export default Home;
