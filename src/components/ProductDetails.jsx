import React from 'react';
import { useParams } from 'react-router-dom';
import { images } from './images';
import { Card } from 'react-bootstrap';
import { useCart } from './CartContext'; 

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useCart(); 

  const products = {
    'iphone11': {
      name: 'iPhone 11',
      price: 2000,
      description: 'The iPhone X display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape, the screen is 5.85 inches diagonally (actual viewable area is less)',
      imageKey: 'iphone11',
    },
    'jacket': {
        name: 'Polo Jacket',
        price: 60,
        description: 'a double-breasted, often belted overcoat made of camels hair or a similar fabric.',
        imageKey: 'jacket',
      },
      'heels': {
        name: 'All Saint Heels',
        price: 200,
        description: 'A solid, raised base or support of leather, wood, rubber, etc., attached to the sole of a shoe or boot under the back part of the foot. heels, womens low-cut shoes with thin or thick heels of medium or high height.',
        imageKey: 'heels',
      },
      'blackT': {
        name: 'Plain Blact T- Shirt',
        price: 40,
        description: 'Perfect for every situation, our plain t-shirts are a must-have for every wardrobe. This plain t-shirt is perfect to go with everything.Shop for this black plain t-shirt online in India, available exclusively at Be Awara.',
        imageKey: 'blackT',
      },
      'hoodie': {
        name: 'Red Hoodie',
        price: 120,
        description: 'Red hoodie in a heavy weight jersey cotton with a slightly oversized fit. Super soft, pre-shrunk and piece dyed for the ultimate jersey.',
        imageKey: 'hoodie',
      },
      'airmax': {
        name: 'Nike Airmax',
        price: 220,
        description: 'Air Max shoes are identified by their midsoles incorporating flexible urethane pouches filled with pressurized gas, visible from the exterior of the shoe and intended to provide cushioning to the underfoot',
        imageKey: 'airmax',
      },
     
  };

  const product = products[productId];

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={images[product.imageKey]} alt={product.name} className="img-fluid" />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text> GHC : {product.price}</Card.Text>
          <Card.Text>Description: {product.description}</Card.Text>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product)} 
          >
            Add to Cart
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
