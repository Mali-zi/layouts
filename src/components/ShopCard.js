import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ShopCard({ name, price, color, img }) {
  return (
    <Col>
    <Card 
      style={{ width: '18rem' }}
      bg='Light'
      border="light"
      className='shop-card'
    >
    <Card.Body className='card-body'>
      <div>
        <Card.Img variant="center" className='img-fluid' class="card-img" src={img} alt={name} />
        <div class="card-img-overlay">
          <Card.Title className='card-title'>{name}</Card.Title>
          <Card.Subtitle className='card-subtitle'>{color}</Card.Subtitle>
          <div className='card-bottom'>
            <span className='card-price'>${price}</span>
            <Button variant="outline-danger" className='card-btn'>Add to cart</Button>
          </div>
        </div>
      </div>
    </Card.Body>
    </Card>  
    </Col>
  )
};

export default ShopCard; 