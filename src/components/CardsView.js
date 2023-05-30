import ShopCard from './ShopCard';
import Row from 'react-bootstrap/Row';

function CardsView({ cards }) {
  const itemList = cards.map((item, index) => {

    const { name, price, color, img } = item;
    return (
      <ShopCard 
        key={index}
        name={name} 
        price={price} 
        color={color} 
        img={img} 
      />
    )
  });
  return (
    <Row xs={1} md={3} className="g-4 cards-row">
      {itemList}
    </Row>
  )
};

export default CardsView;